#!/bin/bash

# Development Setup Script for Bidi Todo API
set -e

echo "🚀 Setting up development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.development.example .env
    echo "✅ .env file created. You can edit it to customize your development setup."
else
    echo "✅ .env file already exists."
fi

# Create API .env file if it doesn't exist
if [ ! -f bidi-api/.env ]; then
    echo "📝 Creating API .env file from template..."
    cp bidi-api/.env.example bidi-api/.env
    echo "✅ API .env file created."
else
    echo "✅ API .env file already exists."
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down --remove-orphans

# Start MongoDB and Mongo Express
echo "🗄️ Starting MongoDB and Mongo Express..."
docker-compose up -d

# Wait for MongoDB to be ready
echo "⏳ Waiting for MongoDB to be ready..."
timeout=60
counter=0

while [ $counter -lt $timeout ]; do
    if docker-compose exec -T mongodb mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
        echo "✅ MongoDB is ready"
        break
    fi
    echo "⏳ Waiting for MongoDB... ($counter/$timeout)"
    sleep 2
    counter=$((counter + 2))
done

if [ $counter -eq $timeout ]; then
    echo "❌ Timeout waiting for MongoDB"
    docker-compose logs mongodb
    exit 1
fi

# Install API dependencies if needed
if [ ! -d "bidi-api/node_modules" ]; then
    echo "📦 Installing API dependencies..."
    cd bidi-api && npm install && cd ..
fi

echo ""
echo "🎉 Development environment is ready!"
echo ""
echo "📊 Service Information:"
echo "   MongoDB: localhost:27017"
echo "   Mongo Express: http://localhost:8081"
echo "   API: http://localhost:3000/api/v1 (when started)"
echo "   Documentation: http://localhost:3000/api (when started)"
echo ""
echo "🔧 Next Steps:"
echo "   1. Start the API: cd bidi-api && npm run start:dev"
echo "   2. Start the frontend: cd bidi-client && ng serve"
echo "   3. Access Mongo Express: http://localhost:8081"
echo ""
echo "📝 Environment Files:"
echo "   - .env (root) - Docker services configuration"
echo "   - bidi-api/.env - API configuration"
echo ""
echo "🔧 Useful Commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop services: docker-compose down"
echo "   Restart services: docker-compose restart"
echo ""

