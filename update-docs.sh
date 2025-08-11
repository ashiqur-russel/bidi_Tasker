#!/bin/bash

# Update API Documentation Script
# This script helps frontend developers update the API documentation
# when the backend API changes

set -e

echo "🔄 Updating API Documentation..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if bidi-api directory exists
if [ ! -d "bidi-api" ]; then
    echo "❌ Error: bidi-api directory not found"
    exit 1
fi

echo "📦 Building API..."
cd bidi-api
npm run build
cd ..

echo "📚 Generating documentation..."
npm run generate-docs

echo "✅ Documentation updated successfully!"
echo ""
echo "🌐 To view the documentation:"
echo "   npm run serve-docs"
echo "   Then open: http://localhost:8080"
echo ""
echo "💡 Tips:"
echo "   - The documentation is now up-to-date with the latest API changes"
echo "   - API calls in the documentation will be made to http://localhost:3000"
echo "   - Run this script whenever the backend API changes"
