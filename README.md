# Tasker - Full Stack Task Management Application

A modern, production-grade task management application with NestJS backend API and Angular frontend. Features real-time task management, responsive design, and comprehensive API integration.

## 🚀 Project Overview

Tasker is a complete task management solution that helps users organize, track, and manage their tasks efficiently. Built with modern technologies and best practices for scalability and maintainability.

## 📁 Project Structure

```
tasker/
├── bidi-api/              # NestJS backend API
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── todo/          # Todo management module
│   │   ├── common/        # Shared utilities
│   │   └── config/        # Configuration
│   ├── Dockerfile         # Production Docker build
│   └── README.md          # Backend documentation
├── bidi-client/           # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── dashboard/ # Dashboard module
│   │   │   ├── tasks/     # Tasks module
│   │   │   ├── projects/  # Projects module
│   │   │   ├── calendar/  # Calendar module
│   │   │   ├── analytics/ # Analytics module
│   │   │   ├── settings/  # Settings module
│   │   │   └── services/  # API services
│   │   ├── environments/  # Environment configurations
│   │   └── styles.scss    # Global styles
│   ├── README.md          # Frontend documentation
│   ├── QUICK_START.md     # Quick start guide
│   └── GIT_ENVIRONMENT_GUIDE.md # Git best practices
├── docker-compose.yml     # MongoDB and services setup
├── mongo-init/           # MongoDB initialization scripts
├── nginx/                # Nginx configuration
├── deploy.sh             # Production deployment script
├── dev-setup.sh          # Development setup script
└── README.md             # This file
```

## 🎯 Features

### **Backend Features**
- ✅ **RESTful API** - Complete CRUD operations for todos
- ✅ **Authentication** - JWT-based authentication system
- ✅ **Database Integration** - MongoDB with Mongoose ODM
- ✅ **Validation** - Comprehensive input validation
- ✅ **Documentation** - Swagger/OpenAPI interactive docs
- ✅ **Health Monitoring** - Application and database health checks
- ✅ **Security** - CORS, rate limiting, input sanitization
- ✅ **Logging** - Structured logging with request/response tracking

### **Frontend Features**
- ✅ **Modern UI** - Responsive design with Material Design principles
- ✅ **Dashboard** - Task overview with statistics and recent activities
- ✅ **Task Management** - Full CRUD operations with real-time updates
- ✅ **Project Organization** - Group tasks by projects
- ✅ **Calendar Integration** - View tasks in calendar format
- ✅ **Analytics** - Task performance and productivity insights
- ✅ **Search & Filtering** - Advanced task filtering capabilities
- ✅ **Notifications** - Real-time notification system
- ✅ **Environment Management** - Multi-environment configuration

## 🛠️ Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Angular CLI** (v19 or higher)
- **Docker** and **Docker Compose**
- **Git**

## ⚡ Quick Start

### **1. Clone Repository**
```bash
git clone <repository-url>
cd tasker
```

### **2. Automated Setup (Recommended)**
```bash
# Run the automated development setup
./dev-setup.sh
```

This will:
- Create environment files from templates
- Start MongoDB and Mongo Express
- Install dependencies for both frontend and backend
- Set up the complete development environment

### **3. Manual Setup**

#### **Backend Setup**
```bash
# Navigate to backend
cd bidi-api

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start MongoDB
docker-compose up -d

# Start the API
npm run start:dev
```

#### **Frontend Setup**
```bash
# Navigate to frontend
cd bidi-client

# Install dependencies
npm install

# Set up environment files
npm run env:setup

# Start development server
npm start
```

### **4. Access Services**

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:4200 | Angular application |
| **Backend API** | http://localhost:3000/api/v1 | NestJS REST API |
| **API Docs** | http://localhost:3000/api | Swagger documentation |
| **MongoDB** | localhost:27017 | Database |
| **Mongo Express** | http://localhost:8081 | Database management UI |

## 📚 Documentation

### **Frontend Documentation**
- **[Frontend README](bidi-client/README.md)** - Comprehensive frontend guide
- **[Quick Start Guide](bidi-client/QUICK_START.md)** - Get started in 5 minutes
- **[Git Environment Guide](bidi-client/GIT_ENVIRONMENT_GUIDE.md)** - Git best practices

### **Backend Documentation**
- **[Backend README](bidi-api/README.md)** - Complete API documentation
- **[API Endpoints](#api-documentation)** - Detailed endpoint reference

## 🔧 Development

### **Frontend Development**
```bash
cd bidi-client

# Start development server
npm start

# Build for production
npm run build:production

# Run tests
npm test

# Environment management
npm run env:setup    # Set up environment files
npm run env:check    # Validate environment
```

### **Backend Development**
```bash
cd bidi-api

# Start development server
npm run start:dev

# Build for production
npm run build

# Run tests
npm run test
npm run test:e2e
```

## 🚀 Deployment

### **Production Deployment**
```bash
# Run the automated deployment script
./deploy.sh
```

This will:
- Build production Docker images
- Set up SSL certificates
- Configure Nginx reverse proxy
- Start all services with health checks
- Provide monitoring endpoints

### **Manual Deployment**
```bash
# Build frontend
cd bidi-client
npm run build:production

# Build backend
cd ../bidi-api
npm run build

# Deploy to your server
# (See individual README files for detailed instructions)
```

## 🔌 API Integration

The frontend integrates with the backend through a comprehensive API service:

### **Available Endpoints**
- `GET /api/v1/todos` - Get all tasks with pagination
- `POST /api/v1/todos` - Create new task
- `GET /api/v1/todos/:id` - Get specific task
- `PATCH /api/v1/todos/:id` - Update task
- `DELETE /api/v1/todos/:id` - Delete task
- `PATCH /api/v1/todos/:id/toggle` - Toggle task completion
- `GET /api/v1/todos/stats` - Get task statistics

### **Frontend API Service**
The `ApiService` in the frontend provides:
- Type-safe HTTP client integration
- Error handling and retry logic
- Response transformation
- Pagination support
- Real-time data synchronization

## 🌍 Environment Configuration

### **Frontend Environments**
- **Development**: `http://localhost:3000/api/v1`
- **Staging**: `https://staging-api.tasker.com/api/v1`
- **Production**: `https://api.tasker.com/api/v1`

### **Backend Environments**
- **Development**: Local MongoDB, development settings
- **Production**: Production MongoDB, optimized settings

## 🧪 Testing

### **Frontend Testing**
```bash
cd bidi-client
npm test              # Unit tests
npm run e2e           # End-to-end tests
```

### **Backend Testing**
```bash
cd bidi-api
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
```

## 📊 Monitoring & Health Checks

### **Application Health**
- **Frontend**: Built-in Angular health monitoring
- **Backend**: Comprehensive health endpoints
  - `GET /api/v1/health` - Full health check
  - `GET /api/v1/health/live` - Liveness probe
  - `GET /api/v1/health/ready` - Readiness probe

### **Database Health**
- MongoDB connection monitoring
- Query performance tracking
- Connection pool management

## 🔒 Security Features

### **Backend Security**
- JWT authentication
- CORS protection
- Rate limiting
- Input validation and sanitization
- Helmet.js security headers
- Request logging and monitoring

### **Frontend Security**
- Environment-based configuration
- Secure API communication
- Input validation
- XSS protection
- CSRF protection

## 🛠️ Technologies Used

### **Backend Stack**
- **Framework**: NestJS (Node.js)
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Validation**: class-validator
- **Documentation**: Swagger/OpenAPI
- **Containerization**: Docker

### **Frontend Stack**
- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: SCSS with CSS custom properties
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router with lazy loading
- **Build Tool**: Angular CLI

### **Infrastructure**
- **Database**: MongoDB
- **Reverse Proxy**: Nginx
- **Containerization**: Docker & Docker Compose
- **Process Management**: PM2 (production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests for both frontend and backend
5. Submit a pull request

### **Development Guidelines**
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation
- Follow Git commit conventions
- Ensure code quality with linting

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

### **Getting Help**
1. Check the [Frontend Quick Start](bidi-client/QUICK_START.md)
2. Review [Frontend Documentation](bidi-client/README.md)
3. Check [Backend Documentation](bidi-api/README.md)
4. Run environment checks: `npm run env:check`
5. Check health endpoints for backend issues

### **Common Issues**
- **Environment Setup**: Use `npm run env:setup` in frontend
- **Database Connection**: Ensure MongoDB is running with Docker
- **Port Conflicts**: Check for existing processes on ports 3000, 4200
- **API Errors**: Verify backend is running and accessible

---

**Built with ❤️ using NestJS & Angular 19**

## API Documentation

### 🚀 Quick Start

Once your API is running, you can access:

- **Interactive Documentation**: http://localhost:3000/api (Swagger UI)
- **API Base URL**: http://localhost:3000/api/v1
- **Health Check**: http://localhost:3000/api/v1/health/live

### 📋 API Endpoints

#### **Todos Management**

##### Get All Todos
```bash
GET /api/v1/todos
```
**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)
- `sortBy` (optional): Sort field (default: createdAt)
- `sortOrder` (optional): asc or desc (default: desc)

**Example:**
```bash
curl -X GET "http://localhost:3000/api/v1/todos?page=1&limit=5&sortBy=title&sortOrder=asc"
```

##### Get Todos by Status
```bash
GET /api/v1/todos?completed=true
GET /api/v1/todos?completed=false
```

##### Get Todos by Priority
```bash
GET /api/v1/todos?priority=high
GET /api/v1/todos?priority=medium
GET /api/v1/todos?priority=low
```

##### Get Todo Statistics
```bash
GET /api/v1/todos/stats
```
**Response:**
```json
{
  "total": 5,
  "completed": 1,
  "pending": 4,
  "byPriority": {
    "high": 2,
    "medium": 2,
    "low": 1
  }
}
```

##### Get Specific Todo
```bash
GET /api/v1/todos/:id
```
**Example:**
```bash
curl -X GET "http://localhost:3000/api/v1/todos/68991bc7fa566c302974e39a"
```

##### Create New Todo
```bash
POST /api/v1/todos
```
**Request Body:**
```json
{
  "title": "New Todo Item",
  "description": "Optional description",
  "priority": "high",
  "dueDate": "2024-12-31T00:00:00.000Z"
}
```
**Example:**
```bash
curl -X POST "http://localhost:3000/api/v1/todos" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn NestJS",
    "description": "Study NestJS framework",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z"
  }'
```

##### Update Todo
```bash
PATCH /api/v1/todos/:id
```
**Request Body (partial):**
```json
{
  "title": "Updated Title",
  "completed": true
}
```

##### Toggle Todo Completion
```bash
PATCH /api/v1/todos/:id/toggle
```

##### Delete Todo
```bash
DELETE /api/v1/todos/:id
```

#### **Health & Monitoring**

##### Comprehensive Health Check
```bash
GET /api/v1/health
```
**Response:**
```json
{
  "status": "ok",
  "info": {
    "database": {
      "status": "up"
    },
    "storage": {
      "status": "up"
    },
    "memory_heap": {
      "status": "up"
    },
    "memory_rss": {
      "status": "up"
    }
  }
}
```

##### Liveness Probe
```bash
GET /api/v1/health/live
```
**Response:**
```json
{
  "status": "alive",
  "uptime": 123.456
}
```

##### Readiness Probe
```bash
GET /api/v1/health/ready
```
**Response:**
```json
{
  "status": "ready",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 📊 Response Formats

#### **Paginated Response**
```json
{
  "data": [
    {
      "_id": "68991bc7fa566c302974e39a",
      "title": "Complete project setup",
      "description": "Set up the initial project structure",
      "completed": false,
      "priority": "high",
      "dueDate": "2024-12-31T00:00:00.000Z",
      "createdAt": "2025-08-10T22:23:03.856Z",
      "updatedAt": "2025-08-10T22:23:03.856Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 5,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}
```

#### **Error Response**
```json
{
  "statusCode": 404,
  "timestamp": "2025-08-10T22:29:44.921Z",
  "path": "/api/v1/todos/invalid-id",
  "method": "GET",
  "message": "Todo with ID invalid-id not found",
  "error": "Not Found"
}
```

### 🔧 Data Models

#### **Todo Object**
```json
{
  "id": "string",
  "title": "string (required, max 200 chars)",
  "description": "string (optional, max 1000 chars)",
  "completed": "boolean (default: false)",
  "priority": "enum (low | medium | high, default: medium)",
  "dueDate": "Date (optional, ISO string)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

#### **Priority Levels**
- `low` - Low priority tasks
- `medium` - Medium priority tasks (default)
- `high` - High priority tasks

### 🛠️ Testing with cURL

#### **Complete CRUD Example:**
```bash
# 1. Create a todo
CREATE_RESPONSE=$(curl -s -X POST "http://localhost:3000/api/v1/todos" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Todo",
    "description": "This is a test todo",
    "priority": "high"
  }')

# Extract the ID
TODO_ID=$(echo $CREATE_RESPONSE | grep -o '"_id":"[^"]*"' | cut -d'"' -f4)

# 2. Get the todo
curl -X GET "http://localhost:3000/api/v1/todos/$TODO_ID"

# 3. Update the todo
curl -X PATCH "http://localhost:3000/api/v1/todos/$TODO_ID" \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# 4. Toggle completion
curl -X PATCH "http://localhost:3000/api/v1/todos/$TODO_ID/toggle"

# 5. Delete the todo
curl -X DELETE "http://localhost:3000/api/v1/todos/$TODO_ID"
```

### 🌐 Interactive Documentation

Visit **http://localhost:3000/api** to access the interactive Swagger UI documentation where you can:

- ✅ **Explore all endpoints**
- ✅ **Test API calls directly**
- ✅ **View request/response schemas**
- ✅ **See authentication requirements**
- ✅ **Download OpenAPI specification**

### 📝 Notes

- **Base URL**: All endpoints are prefixed with `/api/v1`
- **Content-Type**: Use `application/json` for POST/PATCH requests
- **Pagination**: Default 10 items per page, maximum 100
- **Validation**: All inputs are validated automatically
- **Error Handling**: Consistent error response format
- **Rate Limiting**: 100 requests per minute per IP

### Todo Object Structure

```json
{
  "id": "string",
  "title": "string",
  "description": "string (optional)",
  "completed": "boolean",
  "priority": "low | medium | high",
  "dueDate": "Date (optional)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Environment Variables

### Development Environment

The project uses two environment files for development:

#### Root `.env` (Docker Services)
```env
# MongoDB Configuration
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=dev_password_123
MONGO_DATABASE=bidi_todo

# Mongo Express Configuration
MONGO_EXPRESS_USERNAME=admin
MONGO_EXPRESS_PASSWORD=dev_password_123

# API Configuration
API_PORT=3000
NODE_ENV=development
```

#### API `.env` (NestJS Application)
```env
# MongoDB Configuration
MONGODB_URI=mongodb://admin:dev_password_123@localhost:27017/bidi_todo?authSource=admin
MONGODB_DATABASE=bidi_todo

# Application Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=dev_jwt_secret_key_change_in_production
JWT_EXPIRES_IN=24h

# CORS Configuration
CORS_ORIGIN=http://localhost:4200
```

### Production Environment

For production, use the production environment template:
```bash
cp .env.production.example .env.production
# Edit with your production values
```

## Database Access

- **MongoDB**: mongodb://localhost:27017
- **Mongo Express**: http://localhost:8081
  - Username: admin (or your custom username)
  - Password: dev_password_123 (or your custom password)
