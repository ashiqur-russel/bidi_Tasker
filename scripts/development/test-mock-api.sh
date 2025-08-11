#!/bin/bash

# Test Mock API and Documentation Setup
# This script verifies that both the mock API and documentation are working

set -e

echo "🧪 Testing Mock API and Documentation Setup..."

# Test 1: Check if mock API server is running
echo "📡 Testing Mock API Server..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/v1/health | grep -q "200"; then
    echo "✅ Mock API Server is running on http://localhost:3000"
else
    echo "❌ Mock API Server is not running on http://localhost:3000"
    echo "   Run: npm run mock-api"
    exit 1
fi

# Test 2: Check if documentation server is running
echo "📚 Testing Documentation Server..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8080 | grep -q "200"; then
    echo "✅ Documentation Server is running on http://localhost:8080"
else
    echo "❌ Documentation Server is not running on http://localhost:8080"
    echo "   Run: npm run serve-docs"
    exit 1
fi

# Test 3: Test API endpoints
echo "🔍 Testing API Endpoints..."

# Test todos endpoint
echo "   Testing GET /api/v1/todos..."
TODOS_RESPONSE=$(curl -s http://localhost:3000/api/v1/todos)
if echo "$TODOS_RESPONSE" | grep -q "data"; then
    echo "   ✅ Todos endpoint working"
    TODO_COUNT=$(echo "$TODOS_RESPONSE" | grep -o '"total":[0-9]*' | cut -d':' -f2)
    echo "   📊 Found $TODO_COUNT todos"
else
    echo "   ❌ Todos endpoint not working"
fi

# Test stats endpoint
echo "   Testing GET /api/v1/todos/stats..."
STATS_RESPONSE=$(curl -s http://localhost:3000/api/v1/todos/stats)
if echo "$STATS_RESPONSE" | grep -q "total"; then
    echo "   ✅ Stats endpoint working"
else
    echo "   ❌ Stats endpoint not working"
fi

# Test health endpoint
echo "   Testing GET /api/v1/health..."
HEALTH_RESPONSE=$(curl -s http://localhost:3000/api/v1/health)
if echo "$HEALTH_RESPONSE" | grep -q "ok"; then
    echo "   ✅ Health endpoint working"
else
    echo "   ❌ Health endpoint not working"
fi

echo ""
echo "🎉 All tests completed!"
echo ""
echo "🌐 Access URLs:"
echo "   📡 Mock API: http://localhost:3000"
echo "   📚 Documentation: http://localhost:8080"
echo ""
echo "💡 Tips:"
echo "   - Use the documentation to test API endpoints interactively"
echo "   - All endpoints return realistic mock data"
echo "   - No backend or database required"
echo ""
echo "🚀 To start everything: npm run start-mock"
