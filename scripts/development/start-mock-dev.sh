#!/bin/bash

# Start Mock Development Environment
# This script starts both the mock API server and documentation server
# Perfect for frontend developers who need a complete development environment

set -e

echo "🚀 Starting Mock Development Environment for Frontend Developers..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if documentation exists, generate if not
if [ ! -f "docs/api/api-docs/index.html" ]; then
    echo "📚 Generating API documentation..."
    npm run generate-docs
fi

# Check if ports are available
echo "🔍 Checking port availability..."

# Check port 3000 (Mock API)
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 3000 is already in use. Stopping existing process..."
    pkill -f "mock-api-server.js" || true
    pkill -f "nest start" || true
    sleep 2
fi

# Check port 8080 (Documentation)
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 8080 is already in use. Stopping existing process..."
    pkill -f "serve-docs.js" || true
    sleep 2
fi

echo "✅ Ports are available"

echo ""
echo "🌐 Starting services..."
echo "   📡 Mock API Server: http://localhost:3000"
echo "   📚 Documentation: http://localhost:8080"
echo ""

# Open browsers
echo "📖 Opening browsers..."

# Open documentation
if command -v open >/dev/null 2>&1; then
    # macOS
    open http://localhost:8080 &
elif command -v xdg-open >/dev/null 2>&1; then
    # Linux
    xdg-open http://localhost:8080 &
elif command -v start >/dev/null 2>&1; then
    # Windows
    start http://localhost:8080 &
fi

# Open mock API root
sleep 1
if command -v open >/dev/null 2>&1; then
    # macOS
    open http://localhost:3000/api/v1 &
elif command -v xdg-open >/dev/null 2>&1; then
    # Linux
    xdg-open http://localhost:3000/api/v1 &
elif command -v start >/dev/null 2>&1; then
    # Windows
    start http://localhost:3000/api/v1 &
fi

echo ""
echo "💡 Development Environment Ready!"
echo "   - Mock API: http://localhost:3000"
echo "   - Documentation: http://localhost:8080"
echo "   - Test endpoints directly from documentation"
echo "   - All data is mock data (no database required)"
echo ""
echo "🎯 Available Commands:"
echo "   - Press Ctrl+C to stop all services"
echo "   - Run './start-mock-dev.sh' again to restart"
echo ""

# Start both services using concurrently
npm run dev:mock
