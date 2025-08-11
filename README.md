# 🚀 Tasker - Full-Stack Task Management Application

A production-grade task management application built with **NestJS** backend and **Angular** frontend, featuring MongoDB, Docker, and comprehensive development tools.

## 📁 **Project Structure**

```
tasker/
├── 📦 bidi-api/                 # NestJS Backend API
├── 🎨 bidi-client/              # Angular Frontend
├── 🗄️ database/                 # Database initialization
│   └── mongo-init/              # MongoDB setup scripts
├── 📚 docs/                     # Documentation
│   ├── api/                     # API documentation
│   │   ├── api-docs/           # Generated Swagger docs
│   │   └── API_DOCS_README.md  # API docs guide
│   └── guides/                  # Development guides
│       ├── EXTEND_MOCK_API.md  # Mock API extension guide
│       ├── TROUBLESHOOTING.md  # Troubleshooting guide
│       └── MONOREPO_SETUP.md   # Monorepo setup guide
├── 🏗️ infrastructure/           # Infrastructure configuration
│   └── docker/                 # Docker configurations
│       └── docker-compose.yml  # Development services
├── 🛠️ scripts/                  # Automation scripts
│   └── development/            # Development scripts
│       ├── dev-setup.sh       # Development environment setup
│       ├── start-mock-dev.sh  # Mock environment startup
│       ├── test-mock-api.sh   # Mock API testing
│       ├── update-docs.sh     # Documentation updates
│       └── view-api.sh        # API documentation viewer
├── 🛠️ tools/                    # Development tools
│   ├── dev-tools/             # Development utilities
│   │   ├── mock-api-server.js # Mock API server
│   │   └── serve-docs.js      # Documentation server
│   └── scripts/               # Utility scripts
│       └── api                # Quick API docs shortcut
├── 📦 shared/                  # Shared types and DTOs
│   ├── src/                   # Source files
│   │   ├── types/            # TypeScript interfaces
│   │   ├── dto/              # Data Transfer Objects
│   │   └── interfaces/       # Service interfaces
│   └── dist/                 # Compiled output
├── 📄 package.json            # Monorepo configuration
├── 📄 .env                    # Environment variables
└── 📄 README.md               # This file
```

## 🚀 **Quick Start**

### **For Backend Developers:**
```bash
# Setup development environment
npm run setup

# Start API development server
npm run dev:api
```

### **For Frontend Developers:**
```bash
# 🚀 ONE COMMAND - Complete mock environment
npm run start-mock
```

### **For Full-Stack Development:**
```bash
# Setup everything
npm run setup

# Start both frontend and backend
npm run dev
```

## 🛠️ **Development Commands**

### **Core Development:**
```bash
npm run dev              # Start both frontend and backend
npm run dev:api          # Start NestJS API only
npm run dev:client       # Start Angular frontend only
npm run build            # Build both applications
npm run test             # Run all tests
```

### **Docker Services:**
```bash
npm run docker:up        # Start MongoDB and Mongo Express
npm run docker:down      # Stop all Docker services
npm run docker:logs      # View Docker logs
```

### **API Documentation (Frontend Developers):**
```bash
npm run start-mock       # 🚀 Complete mock environment
npm run view-api         # View API documentation only
npm run update-docs      # Update documentation
npm run api              # Quick shortcut for API docs
```

### **Environment Setup:**
```bash
npm run setup            # Setup development environment
npm run install:all      # Install all dependencies
```

## 📚 **API Documentation**

### **For Frontend Developers:**

#### **🚀 Complete Mock Environment (Recommended)**
```bash
npm run start-mock
```
This provides:
- ✅ Mock API server on http://localhost:3000
- ✅ Swagger documentation on http://localhost:8080
- ✅ Realistic mock data for all endpoints
- ✅ No database or backend required!

#### **📚 Documentation Only**
```bash
npm run view-api
```

### **For Backend Developers:**
- **Swagger UI**: http://localhost:3000/api (when API is running)
- **Health Check**: http://localhost:3000/api/v1/health
- **API Base URL**: http://localhost:3000/api/v1

## 🗄️ **Database**

### **Development:**
- **MongoDB**: localhost:27017
- **Database**: bidi_todo
- **Mongo Express**: http://localhost:8081

### **Production:**
- **MongoDB**: Containerized with authentication
- **Nginx**: Reverse proxy with SSL

## 🔧 **Environment Configuration**

### **Development Environment:**
```bash
# Copy environment templates
cp .env.development.example .env
cp bidi-api/.env.example bidi-api/.env

# Edit as needed
nano .env
nano bidi-api/.env
```

### **Production Environment:**
```bash
# Copy production template
cp .env.production.example .env.production

# Edit with production values
nano .env.production
```

## 📦 **Shared Package**

The `shared` package contains all types, DTOs, and interfaces used across both the API and client:

### **Features:**
- ✅ **Type Safety**: Shared TypeScript interfaces
- ✅ **Validation**: DTOs with class-validator decorators
- ✅ **Swagger**: API documentation decorators
- ✅ **Consistency**: Same types for frontend and backend

### **Usage:**
```bash
# Build shared package
npm run build:shared

# Import in API or client
import { ITodo, CreateTodoDto, Priority } from '@tasker/shared';
```

### **Available Types:**
- **Todo Types**: `ITodo`, `ITodoCreate`, `Priority`, etc.
- **User Types**: `IUser`, `IUserLogin`, `UserRole`, etc.
- **Common Types**: `IPaginatedResponse`, `IApiResponse`, etc.
- **DTOs**: `CreateTodoDto`, `UpdateTodoDto`, `LoginDto`, etc.

## 🚀 **Deployment**

### **Development:**
```bash
npm run setup
npm run dev
```

### **Production:**
```bash
# Build all packages
npm run build

# Start services
npm run docker:up
```

## 📖 **Documentation**

- **[API Documentation Guide](docs/api/API_DOCS_README.md)** - Complete guide for frontend developers
- **[Mock API Extension Guide](docs/guides/EXTEND_MOCK_API.md)** - How to extend mock API
- **[Troubleshooting Guide](docs/guides/TROUBLESHOOTING.md)** - Common issues and solutions
- **[Monorepo Setup Guide](docs/guides/MONOREPO_SETUP.md)** - Detailed setup instructions

## 🏗️ **Architecture**

### **Backend (NestJS):**
- **Framework**: NestJS with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Winston with custom interceptors
- **Health Checks**: Terminus

### **Frontend (Angular):**
- **Framework**: Angular with TypeScript
- **Styling**: SCSS
- **State Management**: Angular Services
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router

### **Infrastructure:**
- **Containerization**: Docker & Docker Compose
- **Database**: MongoDB with Mongo Express
- **Development Tools**: Mock API server, Documentation server
- **Shared Package**: TypeScript types and DTOs

## 🔒 **Security Features**

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Request throttling
- **Input Validation**: Request sanitization
- **JWT Authentication**: Secure token-based auth
- **SSL/TLS**: HTTPS in production

## 📊 **Monitoring & Health**

- **Health Checks**: /api/v1/health
- **Liveness Probe**: /api/v1/health/live
- **Readiness Probe**: /api/v1/health/ready
- **Database Monitoring**: Mongo Express
- **Logging**: Structured JSON logs

## 🛠️ **Development Workflow**

### **Adding New Features:**
1. **Backend**: Add DTOs, schemas, controllers, services
2. **Frontend**: Add components, services, routing
3. **Documentation**: Update Swagger docs automatically
4. **Testing**: Unit and integration tests

### **Frontend Development:**
1. **Start Mock Environment**: `npm run start-mock`
2. **View API Docs**: http://localhost:8080
3. **Test Endpoints**: Use Swagger UI
4. **Update Docs**: `npm run update-docs`

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 📄 **License**

This project is licensed under the MIT License.

---

## 🎯 **Quick Reference**

### **Essential Commands:**
```bash
npm run setup          # Setup development environment
npm run start-mock     # Start mock environment (frontend devs)
npm run dev            # Start full development environment
npm run build          # Build all packages
```

### **Key URLs:**
- **API**: http://localhost:3000/api/v1
- **Documentation**: http://localhost:8080
- **Mongo Express**: http://localhost:8081
- **Health Check**: http://localhost:3000/api/v1/health

### **File Locations:**
- **API Code**: `bidi-api/src/`
- **Frontend Code**: `bidi-client/src/`
- **Shared Types**: `shared/src/`
- **Docker Config**: `infrastructure/docker/`
- **Documentation**: `docs/`
- **Scripts**: `scripts/`
- **Tools**: `tools/`
