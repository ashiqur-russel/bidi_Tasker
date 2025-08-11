# API Documentation for Frontend Developers

This guide explains how to use the API documentation without running the backend server.

## 🚀 Quick Start

### Generate and View Documentation

```bash
# Generate and serve documentation
npm run docs
```

This will:
1. Build the API
2. Generate static Swagger documentation
3. Start a documentation server on http://localhost:8080

### Alternative Commands

```bash
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

## 🌐 Accessing Documentation

- **URL**: http://localhost:8080
- **API Base URL**: http://localhost:3000 (when backend is running)
- **Features**:
  - Interactive API testing
  - Request/response schemas
  - Authentication examples
  - Download OpenAPI spec

## 💡 Tips

1. **No Backend Required**: The documentation works independently
2. **Always Up-to-Date**: Generated from the latest API code
3. **Easy Updates**: Run `npm run update-docs` when API changes
4. **Frontend-Friendly**: Perfect for frontend development workflow

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
