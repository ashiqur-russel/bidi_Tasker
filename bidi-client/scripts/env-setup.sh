#!/bin/bash

# Environment Setup Script for Tasker Angular App

echo "🔧 Tasker Environment Setup"
echo "=========================="

# Check if environment files exist
echo "📁 Checking environment files..."

if [ -f "src/environments/environment.ts" ]; then
    echo "✅ Production environment file exists"
else
    echo "❌ Production environment file missing"
    exit 1
fi

if [ -f "src/environments/environment.development.ts" ]; then
    echo "✅ Development environment file exists"
else
    echo "❌ Development environment file missing"
    exit 1
fi

if [ -f "src/environments/environment.staging.ts" ]; then
    echo "✅ Staging environment file exists"
else
    echo "❌ Staging environment file missing"
    exit 1
fi

# Display current environment configurations
echo ""
echo "🌍 Environment Configurations:"
echo "=============================="

echo "Development API URL:"
grep "apiUrl" src/environments/environment.development.ts

echo "Production API URL:"
grep "apiUrl" src/environments/environment.ts

echo "Staging API URL:"
grep "apiUrl" src/environments/environment.staging.ts

echo ""
echo "✅ Environment setup complete!"
echo ""
echo "Usage:"
echo "  npm start          - Development environment"
echo "  npm run build      - Production environment"
echo "  npm run build:staging - Staging environment"
