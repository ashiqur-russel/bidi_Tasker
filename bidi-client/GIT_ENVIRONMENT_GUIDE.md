# Git & Environment Files Guide

## 🔒 **Environment Files & Git Best Practices**

### **❌ What NOT to commit to Git:**
- **Production environment files** (`environment.ts`, `environment.staging.ts`)
- **Real API URLs** and production endpoints
- **API keys, passwords, or secrets**
- **Database connection strings**
- **Any sensitive configuration data**

### **✅ What SHOULD be committed to Git:**
- **Development environment** (`environment.development.ts`) - Safe for local development
- **Template files** (`environment.template.ts`, `environment.production.template.ts`)
- **Documentation** and setup guides
- **Configuration structure** (without real values)

## 📁 **File Structure**

```
src/environments/
├── environment.development.ts     ✅ Committed (safe for dev)
├── environment.ts                 ❌ NOT committed (production)
├── environment.staging.ts         ❌ NOT committed (staging)
├── environment.template.ts        ✅ Committed (template)
├── environment.production.template.ts  ✅ Committed (template)
├── environment.staging.template.ts     ✅ Committed (template)
└── README.md                      ✅ Committed (documentation)
```

## 🚀 **Setup for New Developers**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd bidi-client
```

### **2. Set Up Environment Files**
```bash
# Run the setup script
npm run env:setup

# Or manually copy templates
cp src/environments/environment.production.template.ts src/environments/environment.ts
cp src/environments/environment.staging.template.ts src/environments/environment.staging.ts
```

### **3. Update API URLs**
Edit the copied files and replace placeholder URLs with your actual endpoints:
- `src/environments/environment.ts` - Production API URL
- `src/environments/environment.staging.ts` - Staging API URL

## 🔧 **Available Commands**

```bash
# Environment setup
npm run env:setup          # Create environment files from templates
npm run env:check          # Validate environment configuration

# Development
npm start                  # Development server (localhost:3000)
npm run build:development  # Development build

# Staging
npm run serve:staging      # Staging server
npm run build:staging      # Staging build

# Production
npm run serve:production   # Production server
npm run build:production   # Production build
```

## 🛡️ **Security Checklist**

### **Before Committing:**
- [ ] No real API URLs in committed files
- [ ] No API keys or secrets in code
- [ ] Template files are up to date
- [ ] `.gitignore` excludes sensitive files
- [ ] Documentation is updated

### **For Deployment:**
- [ ] Environment files created from templates
- [ ] Real API URLs configured
- [ ] Production build tested
- [ ] Environment variables set (if needed)

## 📋 **Git Workflow**

### **Development Workflow:**
1. **Clone repository** - Gets safe development config
2. **Run setup script** - Creates environment files from templates
3. **Update URLs** - Replace placeholders with real endpoints
4. **Develop** - Use `npm start` for development
5. **Commit** - Only commit safe files (dev config, templates, docs)

### **Deployment Workflow:**
1. **Create environment files** from templates
2. **Configure real URLs** for target environment
3. **Build application** with appropriate configuration
4. **Deploy** the built application
5. **Never commit** the real environment files

## 🔍 **Troubleshooting**

### **Common Issues:**

**"Environment file not found"**
```bash
# Solution: Run setup script
npm run env:setup
```

**"API calls failing"**
```bash
# Check environment configuration
npm run env:check
# Verify API URL in environment files
```

**"Build failing"**
```bash
# Ensure all environment files exist
ls src/environments/
# Check for syntax errors in environment files
```

## 📚 **Additional Resources**

- [Angular Environment Configuration](https://angular.io/guide/build#configuring-application-environments)
- [Git Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
- [Environment Variables Best Practices](https://12factor.net/config)

## 🆘 **Need Help?**

1. Check the environment setup: `npm run env:check`
2. Review the README in `src/environments/README.md`
3. Run the setup script: `npm run env:setup`
4. Verify `.gitignore` excludes sensitive files
