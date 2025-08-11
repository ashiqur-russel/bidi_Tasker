#!/bin/bash

# Production Deployment Script for Bidi Todo API
set -e

echo "🚀 Starting production deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "❌ .env.production file not found. Please create it from .env.production.example"
    exit 1
fi

# Load environment variables
source .env.production

# Validate required environment variables
required_vars=("MONGO_PASSWORD" "JWT_SECRET" "CORS_ORIGIN")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Required environment variable $var is not set in .env.production"
        exit 1
    fi
done

echo "✅ Environment variables validated"

# Create SSL directory if it doesn't exist
mkdir -p infrastructure/nginx/ssl

# Generate self-signed SSL certificate for development (replace with real certs in production)
if [ ! -f infrastructure/nginx/ssl/cert.pem ] || [ ! -f infrastructure/nginx/ssl/key.pem ]; then
    echo "🔐 Generating self-signed SSL certificate..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout infrastructure/nginx/ssl/key.pem \
        -out infrastructure/nginx/ssl/cert.pem \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f infrastructure/docker/docker-compose.prod.yml down --remove-orphans

# Build and start production containers
echo "🔨 Building and starting production containers..."
docker-compose -f infrastructure/docker/docker-compose.prod.yml up -d --build

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
timeout=120
counter=0

while [ $counter -lt $timeout ]; do
    if curl -f http://localhost:3000/api/v1/health/live > /dev/null 2>&1; then
        echo "✅ API is healthy"
        break
    fi
    echo "⏳ Waiting for API to be ready... ($counter/$timeout)"
    sleep 2
    counter=$((counter + 2))
done

if [ $counter -eq $timeout ]; then
    echo "❌ Timeout waiting for services to be healthy"
    docker-compose -f infrastructure/docker/docker-compose.prod.yml logs
    exit 1
fi

# Run database migrations (if any)
echo "🗄️ Checking database connection..."
docker-compose -f infrastructure/docker/docker-compose.prod.yml exec -T api npm run migration:run 2>/dev/null || echo "No migrations to run"

# Display deployment information
echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📊 Service Information:"
echo "   API: https://localhost/api/v1"
echo "   Health Check: https://localhost/health"
echo "   Documentation: https://localhost/docs"
echo "   MongoDB: localhost:27017"
echo ""
echo "🔧 Useful Commands:"
echo "   View logs: docker-compose -f infrastructure/docker/docker-compose.prod.yml logs -f"
echo "   Stop services: docker-compose -f infrastructure/docker/docker-compose.prod.yml down"
echo "   Restart services: docker-compose -f infrastructure/docker/docker-compose.prod.yml restart"
echo ""
echo "⚠️  Security Notes:"
echo "   - Replace self-signed SSL certificate with real certificates"
echo "   - Update JWT_SECRET with a secure random string"
echo "   - Configure proper firewall rules"
echo "   - Set up monitoring and alerting"
echo ""

