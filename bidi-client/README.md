# Tasker - Frontend Application

A modern, production-grade task management application built with Angular 19. Features a responsive design, real-time API integration, and comprehensive task management capabilities.

## 🚀 Features

### **Core Functionality**
- **Dashboard** - Overview with task statistics and recent activities
- **Task Management** - Create, view, update, and delete tasks
- **Project Organization** - Group tasks by projects
- **Calendar Integration** - View tasks in calendar format
- **Analytics** - Task performance and productivity insights
- **Settings** - User preferences and application configuration

### **UI/UX Features**
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean, intuitive interface with Material Design principles
- **Dark/Light Theme** - Customizable color schemes
- **Real-time Updates** - Live data synchronization with backend
- **Search & Filtering** - Advanced task filtering and search capabilities
- **Notifications** - Real-time notification system

### **Technical Features**
- **Angular 19** - Latest Angular framework with standalone components
- **Lazy Loading** - Optimized module loading for better performance
- **API Integration** - Full CRUD operations with NestJS backend
- **Environment Configuration** - Multi-environment support
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with CSS custom properties

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Angular CLI** (v19 or higher)
- **Backend API** running (see [bidi-api](../bidi-api/README.md))

## 🛠️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd tasker/bidi-client
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Configuration**
```bash
# Run the automated setup script
npm run env:setup

# Or manually copy template files
cp src/environments/environment.production.template.ts src/environments/environment.ts
cp src/environments/environment.staging.template.ts src/environments/environment.staging.ts
```

### **4. Configure API Endpoints**
Edit the environment files and update the API URLs:
- `src/environments/environment.ts` - Production API URL
- `src/environments/environment.staging.ts` - Staging API URL
- `src/environments/environment.development.ts` - Development API URL (already configured)

### **5. Start Development Server**
```bash
npm start
```

Navigate to `http://localhost:4200/` to view the application.

## 🔧 Available Scripts

### **Development**
```bash
npm start                    # Start development server
npm run build:development    # Build for development
npm run watch               # Build and watch for changes
```

### **Production**
```bash
npm run build:production     # Build for production
npm run serve:production     # Serve production build
```

### **Staging**
```bash
npm run build:staging        # Build for staging
npm run serve:staging        # Serve staging build
```

### **Environment Management**
```bash
npm run env:setup           # Set up environment files from templates
npm run env:check           # Validate environment configuration
```

### **Testing**
```bash
npm test                    # Run unit tests
npm run e2e                 # Run end-to-end tests
```

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/               # Authentication module
│   ├── dashboard/          # Dashboard module
│   ├── tasks/             # Tasks module
│   ├── projects/          # Projects module
│   ├── calendar/          # Calendar module
│   ├── analytics/         # Analytics module
│   ├── settings/          # Settings module
│   ├── services/          # Shared services
│   │   └── api.service.ts # API service for backend communication
│   ├── app.component.*    # Main application component
│   ├── app.module.ts      # Root module
│   └── app-routing.module.ts # Application routing
├── environments/          # Environment configurations
│   ├── environment.development.ts  # Development config
│   ├── environment.ts              # Production config
│   ├── environment.staging.ts      # Staging config
│   └── *.template.ts               # Template files
├── styles.scss            # Global styles and design system
└── main.ts               # Application entry point
```

## 🎨 Design System

The application uses a comprehensive design system with:

### **Color Palette**
- **Primary**: `#3B82F6` (Blue)
- **Secondary**: `#6B7280` (Gray)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Yellow)
- **Error**: `#EF4444` (Red)
- **Accent**: `#8B5CF6` (Purple)

### **Typography**
- **Font Family**: Inter, system fonts
- **Font Sizes**: 12px to 48px scale
- **Font Weights**: 400, 500, 600, 700

### **Spacing**
- **Base Unit**: 4px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px

### **Components**
- Buttons, Cards, Forms, Badges, Progress Bars
- Navigation (Header, Sidebar)
- Modals, Dropdowns, Notifications

## 🔌 API Integration

The application integrates with a NestJS backend API:

### **Available Endpoints**
- `GET /api/v1/todos` - Get all tasks
- `POST /api/v1/todos` - Create new task
- `GET /api/v1/todos/:id` - Get specific task
- `PATCH /api/v1/todos/:id` - Update task
- `DELETE /api/v1/todos/:id` - Delete task
- `PATCH /api/v1/todos/:id/toggle` - Toggle task completion
- `GET /api/v1/todos/stats` - Get task statistics

### **API Service**
The `ApiService` handles all backend communication with:
- HTTP client integration
- Error handling
- Response transformation
- Pagination support
- Type-safe interfaces

## 🌍 Environment Configuration

### **Environment Files**
- `environment.development.ts` - Development configuration (✅ Committed)
- `environment.ts` - Production configuration (❌ NOT committed)
- `environment.staging.ts` - Staging configuration (❌ NOT committed)

### **Configuration Properties**
```typescript
export const environment = {
  production: boolean,    // Environment flag
  apiUrl: string         // API base URL
};
```

### **Git Best Practices**
- **Safe to commit**: Development config, template files, documentation
- **NOT committed**: Production/staging configs with real URLs
- **Template system**: Automated setup for new developers

## 🚀 Deployment

### **Development**
```bash
npm start
```

### **Staging**
```bash
npm run build:staging
# Deploy dist/ folder to staging server
```

### **Production**
```bash
npm run build:production
# Deploy dist/ folder to production server
```

## 🧪 Testing

### **Unit Tests**
```bash
npm test
```

### **End-to-End Tests**
```bash
npm run e2e
```

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Git Environment Guide](./GIT_ENVIRONMENT_GUIDE.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
1. Check the [Git Environment Guide](./GIT_ENVIRONMENT_GUIDE.md)
2. Review environment setup: `npm run env:check`
3. Run setup script: `npm run env:setup`
4. Check the [bidi-api](../bidi-api/README.md) for backend setup

---

**Built with ❤️ using Angular 19**
