# API Documentation & Mock Server for Frontend Developers

This guide explains how to use the API documentation and mock server without running the backend server.

## 🚀 Quick Start

### **🚀 Complete Mock Environment (Recommended)**

```bash
# Start mock API server + documentation + browser
npm run start-mock
```

This will:
1. ✅ Start a mock API server on http://localhost:3000 with realistic data
2. ✅ Generate and serve Swagger documentation on http://localhost:8080
3. ✅ Automatically open both in your browser
4. ✅ Allow you to test all API endpoints with mock data
5. ✅ No database or backend required!

### **📚 Documentation Only**

```bash
# 🚀 Generate, serve, and open API documentation
npm run view-api

# 🎯 ULTRA SIMPLE - Just run this file
./api
```

This will:
1. ✅ Build the API
2. ✅ Generate static Swagger documentation
3. ✅ Start a documentation server on http://localhost:8080
4. ✅ Automatically open your browser to the documentation

### Alternative Commands

```bash
# Generate and serve documentation
npm run docs

# Generate documentation only
npm run generate-docs

# Serve existing documentation only
npm run serve-docs

# Update documentation (when API changes)
npm run update-docs
```

## 📁 Generated Files

The documentation is generated in two locations:

- **`api-docs/`** - Root project directory (for frontend developers)
- **`bidi-api/docs/`** - API project directory (for backend developers)

Files generated:
- `index.html` - Swagger UI interface
- `swagger.json` - OpenAPI specification

## 🔄 Workflow for Frontend Development

### Initial Setup
```bash
# First time setup
npm run docs
```

### When API Changes
```bash
# Update documentation when backend developer makes changes
npm run update-docs
```

### Daily Development
```bash
# Start documentation server (if not already running)
npm run serve-docs
```

## 🌐 Accessing Services

### **Mock API Server**
- **URL**: http://localhost:3000
- **Features**:
  - ✅ All API endpoints working with mock data
  - ✅ Realistic data based on DTOs and schemas
  - ✅ Supports pagination, filtering, and sorting
  - ✅ CRUD operations (Create, Read, Update, Delete)
  - ✅ Data persists during server session
  - ✅ No database required

### **API Documentation**
- **URL**: http://localhost:8080
- **API Base URL**: http://localhost:3000 (points to mock server)
- **Features**:
  - Interactive API testing
  - Request/response schemas
  - Authentication examples
  - Download OpenAPI spec

## 💡 Tips

1. **Complete Independence**: No backend, database, or external dependencies required
2. **Realistic Mock Data**: Based on actual DTOs and schemas from the NestJS project
3. **Always Up-to-Date**: Generated from the latest API code
4. **Easy Updates**: Run `npm run update-docs` when API changes
5. **Frontend-Friendly**: Perfect for frontend development workflow
6. **Data Persistence**: Mock data persists during server session (restart to reset)

## 📊 Mock Data Features

The mock server includes realistic data for testing:

### **Todos Collection**
- 5 sample todos with different priorities and completion status
- Supports all CRUD operations
- Includes pagination, filtering by status/priority, and sorting
- Realistic timestamps and IDs

### **Users Collection**
- Sample user data for authentication testing
- Realistic user profiles

### **API Endpoints**
- All health check endpoints
- Complete todo management (GET, POST, PATCH, DELETE)
- Statistics endpoint
- Toggle completion endpoint

## 🔧 Troubleshooting

### Port Already in Use
If port 8080 is already in use:
```bash
# Set a different port
DOCS_PORT=8081 npm run serve-docs
```

### Documentation Not Updating
If documentation seems outdated:
```bash
# Force rebuild and regenerate
npm run update-docs
```

### API Calls Not Working
- Ensure the backend is running on http://localhost:3000
- Check that the API endpoints match the documentation
- Verify CORS settings if making calls from a different origin

## 📚 Additional Resources

- [Swagger UI Documentation](https://swagger.io/tools/swagger-ui/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [NestJS Swagger Integration](https://docs.nestjs.com/openapi/introduction)
