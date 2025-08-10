# Quick Start Guide

Get the Tasker frontend application running in 5 minutes! 🚀

## ⚡ Quick Setup

### **1. Prerequisites Check**
```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version (should be 9+)
npm --version

# Check Angular CLI (install if missing)
ng version
```

### **2. Clone & Install**
```bash
# Clone the repository
git clone <repository-url>
cd tasker/bidi-client

# Install dependencies
npm install
```

### **3. Environment Setup**
```bash
# Run the automated setup (creates environment files from templates)
npm run env:setup
```

### **4. Start Development Server**
```bash
# Start the application
npm start
```

### **5. Open Browser**
Navigate to `http://localhost:4200/` 🎉

## 🔧 Common Issues & Solutions

### **"Environment file not found"**
```bash
npm run env:setup
```

### **"API calls failing"**
1. Ensure backend is running (see [bidi-api](../bidi-api/README.md))
2. Check environment configuration: `npm run env:check`
3. Verify API URL in environment files

### **"Port 4200 already in use"**
```bash
# Kill existing process
lsof -ti:4200 | xargs kill -9
# Or use different port
ng serve --port 4201
```

### **"Module not found"**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build:production` | Build for production |
| `npm run env:setup` | Set up environment files |
| `npm run env:check` | Validate environment |
| `npm test` | Run unit tests |

## 🌐 Environment URLs

| Environment | API URL | Status |
|-------------|---------|--------|
| Development | `http://localhost:3000/api/v1` | ✅ Ready |
| Staging | `https://staging-api.tasker.com/api/v1` | ⚠️ Configure |
| Production | `https://api.tasker.com/api/v1` | ⚠️ Configure |

## 📱 Application Features

- **Dashboard** - Task overview and statistics
- **Tasks** - Full CRUD operations
- **Projects** - Task organization
- **Calendar** - Task scheduling
- **Analytics** - Performance insights
- **Settings** - User preferences

## 🔗 Next Steps

1. **Explore the UI** - Navigate through different sections
2. **Test API Integration** - Create and manage tasks
3. **Check Responsive Design** - Test on different screen sizes
4. **Review Code Structure** - Understand the architecture
5. **Read Full Documentation** - See [README.md](./README.md)

## 🆘 Need Help?

- **Environment Issues**: `npm run env:check`
- **Setup Problems**: `npm run env:setup`
- **Full Documentation**: [README.md](./README.md)
- **Git Best Practices**: [GIT_ENVIRONMENT_GUIDE.md](./GIT_ENVIRONMENT_GUIDE.md)

---

**Happy Coding! 🎯**
