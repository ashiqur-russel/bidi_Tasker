# Monorepo Setup Guide

This guide explains the monorepo structure and how to work with both the frontend and backend in a single repository.

## 🏗️ Monorepo Structure

```
tasker/
├── bidi-api/              # NestJS Backend
├── bidi-client/           # Angular Frontend
├── package.json           # Root package.json with workspaces
├── .gitignore            # Global gitignore for all projects
├── docker-compose.yml    # Shared Docker services
└── README.md             # Main project documentation
```

## 🔧 Key Changes Made

### **1. Removed Separate Git Repositories**
- ✅ Removed `bidi-api/.git/` directory
- ✅ Removed individual `.gitignore` files
- ✅ Created unified `.gitignore` at root level

### **2. Added npm Workspaces**
- ✅ Root `package.json` with workspace configuration
- ✅ Centralized dependency management
- ✅ Unified scripts for both projects

### **3. Environment Management**
- ✅ Frontend environment files excluded from Git
- ✅ Template files for easy setup
- ✅ Automated environment setup scripts

## 🚀 Quick Start Commands

### **Install All Dependencies**
```bash
npm run install:all
```

### **Start Both Applications**
```bash
npm run dev
```

### **Start Individual Applications**
```bash
npm run dev:api      # Backend only
npm run dev:client   # Frontend only
```

### **Build Both Applications**
```bash
npm run build
```

### **Run All Tests**
```bash
npm run test
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both frontend and backend |
| `npm run dev:api` | Start backend only |
| `npm run dev:client` | Start frontend only |
| `npm run build` | Build both applications |
| `npm run build:api` | Build backend only |
| `npm run build:client` | Build frontend for production |
| `npm run build:staging` | Build frontend for staging |
| `npm run test` | Run tests for both projects |
| `npm run test:api` | Run backend tests |
| `npm run test:client` | Run frontend tests |
| `npm run install:all` | Install dependencies for all workspaces |
| `npm run clean` | Clean all build artifacts |
| `npm run docker:up` | Start Docker services |
| `npm run docker:down` | Stop Docker services |
| `npm run setup` | Automated development setup |
| `npm run deploy` | Production deployment |
| `npm run env:setup` | Set up environment files |
| `npm run env:check` | Validate environment configuration |

## 🔒 Git Best Practices

### **What's Committed**
- ✅ Source code for both frontend and backend
- ✅ Configuration files (except sensitive ones)
- ✅ Documentation
- ✅ Template files
- ✅ Development environment files

### **What's NOT Committed**
- ❌ `node_modules/` directories
- ❌ Build artifacts (`dist/` directories)
- ❌ Environment files with real URLs
- ❌ Log files
- ❌ IDE-specific files

### **Environment Files**
- `bidi-client/src/environments/environment.development.ts` - ✅ Committed (safe)
- `bidi-client/src/environments/environment.ts` - ❌ NOT committed (production)
- `bidi-client/src/environments/environment.staging.ts` - ❌ NOT committed (staging)
- Template files - ✅ Committed (for new developers)

## 🌍 Environment Setup

### **For New Developers**
```bash
# 1. Clone the repository
git clone <repository-url>
cd tasker

# 2. Install all dependencies
npm run install:all

# 3. Set up environment files
npm run env:setup

# 4. Start development servers
npm run dev
```

### **For Deployment**
```bash
# 1. Build both applications
npm run build

# 2. Deploy using the deployment script
npm run deploy
```

## 🛠️ Development Workflow

### **Daily Development**
```bash
# Start both applications
npm run dev

# Make changes to either frontend or backend
# Both will hot-reload automatically
```

### **Testing Changes**
```bash
# Run all tests
npm run test

# Run specific project tests
npm run test:api
npm run test:client
```

### **Building for Production**
```bash
# Build both applications
npm run build

# Or build individually
npm run build:api
npm run build:client
```

## 🔍 Troubleshooting

### **Common Issues**

**"Module not found" errors**
```bash
# Clean and reinstall dependencies
npm run clean
npm run install:all
```

**"Port already in use" errors**
```bash
# Kill existing processes
lsof -ti:3000 | xargs kill -9  # Backend
lsof -ti:4200 | xargs kill -9  # Frontend
```

**"Environment file not found"**
```bash
# Set up environment files
npm run env:setup
```

**"Docker services not running"**
```bash
# Start Docker services
npm run docker:up
```

## 📚 Additional Resources

- [Main README](./README.md) - Complete project documentation
- [Frontend README](./bidi-client/README.md) - Frontend-specific guide
- [Backend README](./bidi-api/README.md) - Backend-specific guide
- [Git Environment Guide](./bidi-client/GIT_ENVIRONMENT_GUIDE.md) - Git best practices

## 🎯 Benefits of Monorepo

1. **Unified Development** - Work on both frontend and backend in one place
2. **Shared Dependencies** - Avoid version conflicts
3. **Simplified CI/CD** - Single pipeline for both applications
4. **Better Coordination** - Easier to coordinate changes between frontend and backend
5. **Reduced Complexity** - Single repository to manage
6. **Atomic Commits** - Changes to both applications can be committed together

---

**Happy coding in the monorepo! 🚀**
