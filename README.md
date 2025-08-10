# Bidi Todo Application

A full-stack todo application with NestJS backend API and Angular frontend.

## Project Structure

```
tasker/
├── bidi-api/          # NestJS backend API
├── bidi-client/       # Angular frontend
├── docker-compose.yml # MongoDB and Mongo Express setup
├── mongo-init/        # MongoDB initialization scripts
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn

## Quick Start

### Development Mode

#### 1. Quick Setup (Recommended)

```bash
# Run the automated development setup
./dev-setup.sh
```

This will:
- Create environment files from templates
- Start MongoDB and Mongo Express
- Install dependencies
- Set up the development environment

#### 2. Manual Setup

If you prefer manual setup:

```bash
# Create environment files
cp .env.development.example .env
cp bidi-api/.env.example bidi-api/.env

# Start MongoDB and Mongo Express
docker-compose up -d

# Install API dependencies
cd bidi-api && npm install

# Start the API
npm run start:dev
```

#### 3. Start the Frontend

```bash
cd bidi-client
npm install
ng serve
```

#### 4. Access Services

- **API**: http://localhost:3000/api/v1
- **Documentation**: http://localhost:3000/api
- **MongoDB**: localhost:27017
- **Mongo Express**: http://localhost:8081
  - Username: admin (or your custom username)
  - Password: dev_password_123 (or your custom password)

### Production Mode

#### 1. Set up Environment Variables

```bash
# Copy and configure production environment
cp .env.production.example .env.production
# Edit .env.production with your production values
```

#### 2. Deploy to Production

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

#### 3. Access Production Services

- **API**: https://yourdomain.com/api/v1
- **Health Check**: https://yourdomain.com/health
- **Documentation**: https://yourdomain.com/docs
- **MongoDB**: localhost:27017 (internal)

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

## Development

### Backend Development

```bash
cd bidi-api
npm run start:dev    # Development mode with hot reload
npm run build        # Build for production
npm run test         # Run tests
npm run test:e2e     # Run end-to-end tests
```

### Frontend Development

```bash
cd bidi-client
ng serve             # Development server
ng build             # Build for production
ng test              # Run tests
```

## Features

### Development Features
- ✅ CRUD operations for todos
- ✅ Filter todos by completion status
- ✅ Filter todos by priority
- ✅ Toggle todo completion
- ✅ MongoDB integration with Mongoose
- ✅ Input validation with class-validator
- ✅ CORS enabled
- ✅ Docker setup for database
- ✅ Mock data initialization

### Production Features
- ✅ **Security**: Helmet.js, CORS, rate limiting, input sanitization
- ✅ **Logging**: Structured logging with Winston, request/response logging
- ✅ **Error Handling**: Global exception filter with proper error responses
- ✅ **API Documentation**: Swagger/OpenAPI with interactive documentation
- ✅ **Health Checks**: Application, database, disk, and memory monitoring
- ✅ **Pagination**: Efficient data pagination with metadata
- ✅ **Validation**: Comprehensive input validation and sanitization
- ✅ **Performance**: Compression, caching, optimized database queries
- ✅ **Monitoring**: Health endpoints, uptime tracking, performance metrics
- ✅ **Docker**: Multi-stage production Docker builds
- ✅ **Reverse Proxy**: Nginx with SSL, security headers, rate limiting
- ✅ **Deployment**: Automated deployment script with health checks

## Technologies Used

### Backend
- NestJS
- MongoDB with Mongoose
- TypeScript
- class-validator for validation
- Docker for database

### Frontend
- Angular
- TypeScript
- SCSS for styling

## License

This project is licensed under the MIT License.
