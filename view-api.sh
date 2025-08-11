#!/bin/bash

# View API Documentation Script
# One command to generate and view Swagger API documentation

set -e

echo "🚀 Setting up API Documentation for Frontend Developers..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if documentation already exists
if [ ! -f "api-docs/index.html" ]; then
    echo "📚 Generating API documentation..."
    npm run generate-docs
else
    echo "📚 Documentation already exists, checking if it's up-to-date..."
    # Check if API has been modified since last generation
    if [ "api-docs/index.html" -ot "bidi-api/src" ]; then
        echo "🔄 API has been updated, regenerating documentation..."
        npm run generate-docs
    else
        echo "✅ Documentation is up-to-date"
    fi
fi

echo "🌐 Starting documentation server..."

# Check if port 8080 is already in use
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 8080 is already in use. Stopping existing server..."
    pkill -f "node serve-docs.js" || true
    sleep 2
fi

echo "📖 Opening browser to http://localhost:8080"
echo ""
echo "💡 Tips:"
echo "   - Press Ctrl+C to stop the server"
echo "   - API calls will be made to http://localhost:3000"
echo "   - Run this script again to update documentation"
echo ""

# Open browser (works on macOS, Linux, and Windows)
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

# Start the documentation server
npm run serve-docs
