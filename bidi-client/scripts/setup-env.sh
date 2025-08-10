#!/bin/bash

# Environment Setup Script for Tasker Angular App

echo "🔧 Tasker Environment Setup"
echo "=========================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the bidi-client directory"
    exit 1
fi

# Check if environment files already exist
if [ -f "src/environments/environment.ts" ]; then
    echo "⚠️  Production environment file already exists"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Skipping production environment file"
    else
        echo "📝 Creating production environment file..."
        cp src/environments/environment.production.template.ts src/environments/environment.ts
        echo "✅ Production environment file created"
        echo "   Please update the API URL in src/environments/environment.ts"
    fi
else
    echo "📝 Creating production environment file..."
    cp src/environments/environment.production.template.ts src/environments/environment.ts
    echo "✅ Production environment file created"
    echo "   Please update the API URL in src/environments/environment.ts"
fi

if [ -f "src/environments/environment.staging.ts" ]; then
    echo "⚠️  Staging environment file already exists"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Skipping staging environment file"
    else
        echo "📝 Creating staging environment file..."
        cp src/environments/environment.staging.template.ts src/environments/environment.staging.ts
        echo "✅ Staging environment file created"
        echo "   Please update the API URL in src/environments/environment.staging.ts"
    fi
else
    echo "📝 Creating staging environment file..."
    cp src/environments/environment.staging.template.ts src/environments/environment.staging.ts
    echo "✅ Staging environment file created"
    echo "   Please update the API URL in src/environments/environment.staging.ts"
fi

echo ""
echo "🌍 Current Environment Files:"
echo "=============================="

if [ -f "src/environments/environment.development.ts" ]; then
    echo "✅ Development: src/environments/environment.development.ts"
    echo "   API URL: $(grep "apiUrl" src/environments/environment.development.ts)"
else
    echo "❌ Development: Missing"
fi

if [ -f "src/environments/environment.ts" ]; then
    echo "✅ Production: src/environments/environment.ts"
    echo "   API URL: $(grep "apiUrl" src/environments/environment.ts)"
else
    echo "❌ Production: Missing"
fi

if [ -f "src/environments/environment.staging.ts" ]; then
    echo "✅ Staging: src/environments/environment.staging.ts"
    echo "   API URL: $(grep "apiUrl" src/environments/environment.staging.ts)"
else
    echo "❌ Staging: Missing"
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo "1. Update API URLs in the environment files"
echo "2. Test the application: npm start"
echo "3. Build for production: npm run build:production"
echo "4. Build for staging: npm run build:staging"
echo ""
echo "🔒 Security Reminder:"
echo "===================="
echo "- Environment files with real URLs are NOT committed to Git"
echo "- Only template files and development config are committed"
echo "- Update .gitignore if you add new sensitive files"
