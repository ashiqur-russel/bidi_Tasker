# Extending Mock API Server

This guide explains how to extend the mock API server when new endpoints are added by the backend developer.

## 🔄 **Workflow When New APIs Are Added**

### **For Frontend Developer:**

1. **Update Documentation:**
   ```bash
   npm run update-docs
   ```

2. **Restart Mock Environment:**
   ```bash
   npm run start-mock
   ```

### **For Backend Developer (Optional):**

If you want to add realistic mock data for new endpoints, follow these steps:

## 🛠️ **How to Add New Endpoints to Mock API**

### **Step 1: Add Mock Data**

In `mock-api-server.js`, add new collections to the `mockDatabase` object:

```javascript
const mockDatabase = {
  todos: [...],
  users: [...],
  // 🆕 ADD NEW COLLECTION HERE
  projects: [
    {
      _id: '507f1f77bcf86cd799439031',
      name: 'Tasker App',
      description: 'Full-stack task management application',
      status: 'active',
      createdAt: '2024-01-01T10:00:00.000Z',
      updatedAt: '2024-01-01T10:00:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439032',
      name: 'E-commerce Platform',
      description: 'Online shopping platform',
      status: 'planning',
      createdAt: '2024-01-02T10:00:00.000Z',
      updatedAt: '2024-01-02T10:00:00.000Z'
    }
  ]
};
```

### **Step 2: Add Route Handlers**

Add new routes to the `routes` object:

```javascript
const routes = {
  // ... existing routes ...
  
  // 🆕 ADD NEW ROUTES HERE
  'GET:/api/v1/projects': (req, res) => {
    const { query } = url.parse(req.url, true);
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;
    
    const result = paginateData(mockDatabase.projects, page, limit, sortBy, sortOrder);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  },
  
  'POST:/api/v1/projects': (req, res) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const projectData = JSON.parse(body);
        const newProject = {
          _id: generateId(),
          name: projectData.name,
          description: projectData.description || '',
          status: projectData.status || 'active',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        mockDatabase.projects.push(newProject);
        
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newProject));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  },
  
  'GET:/api/v1/projects/:id': (req, res) => {
    const id = req.params.id;
    const project = mockDatabase.projects.find(p => p._id === id);
    
    if (!project) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Project not found' }));
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(project));
  },
  
  'PATCH:/api/v1/projects/:id': (req, res) => {
    const id = req.params.id;
    const projectIndex = mockDatabase.projects.findIndex(p => p._id === id);
    
    if (projectIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Project not found' }));
      return;
    }
    
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const updates = JSON.parse(body);
        const updatedProject = {
          ...mockDatabase.projects[projectIndex],
          ...updates,
          updatedAt: new Date().toISOString()
        };
        
        mockDatabase.projects[projectIndex] = updatedProject;
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedProject));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  },
  
  'DELETE:/api/v1/projects/:id': (req, res) => {
    const id = req.params.id;
    const projectIndex = mockDatabase.projects.findIndex(p => p._id === id);
    
    if (projectIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Project not found' }));
      return;
    }
    
    const deletedProject = mockDatabase.projects.splice(projectIndex, 1)[0];
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      message: 'Project deleted successfully',
      deletedProject 
    }));
  }
};
```

### **Step 3: Update Console Output**

Update the console.log section to include new endpoints:

```javascript
console.log(`\n📋 Available endpoints:`);
console.log(`   GET  /api/v1/health`);
console.log(`   GET  /api/v1/health/live`);
console.log(`   GET  /api/v1/health/ready`);
console.log(`   GET  /api/v1`);
console.log(`   GET  /api/v1/todos`);
console.log(`   POST /api/v1/todos`);
console.log(`   GET  /api/v1/todos/stats`);
console.log(`   GET  /api/v1/todos/:id`);
console.log(`   PATCH /api/v1/todos/:id`);
console.log(`   PATCH /api/v1/todos/:id/toggle`);
console.log(`   DELETE /api/v1/todos/:id`);
// 🆕 ADD NEW ENDPOINTS HERE
console.log(`   GET  /api/v1/projects`);
console.log(`   POST /api/v1/projects`);
console.log(`   GET  /api/v1/projects/:id`);
console.log(`   PATCH /api/v1/projects/:id`);
console.log(`   DELETE /api/v1/projects/:id`);
```

## 🎯 **Quick Reference**

### **Common Patterns:**

1. **GET with pagination:**
   ```javascript
   'GET:/api/v1/resource': (req, res) => {
     const { query } = url.parse(req.url, true);
     const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;
     const result = paginateData(mockDatabase.resource, page, limit, sortBy, sortOrder);
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(result));
   }
   ```

2. **POST (Create):**
   ```javascript
   'POST:/api/v1/resource': (req, res) => {
     // Parse body and create new item
     const newItem = { _id: generateId(), ...data, createdAt: new Date().toISOString() };
     mockDatabase.resource.push(newItem);
     res.writeHead(201, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(newItem));
   }
   ```

3. **GET by ID:**
   ```javascript
   'GET:/api/v1/resource/:id': (req, res) => {
     const item = mockDatabase.resource.find(r => r._id === req.params.id);
     if (!item) {
       res.writeHead(404, { 'Content-Type': 'application/json' });
       res.end(JSON.stringify({ error: 'Not found' }));
       return;
     }
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(item));
   }
   ```

## 💡 **Tips**

- **Use realistic data** that matches your DTOs
- **Include all required fields** from your schemas
- **Add proper error handling** for 404s and validation
- **Test endpoints** after adding them
- **Update documentation** when adding new endpoints

## 🚀 **After Adding New Endpoints**

1. **Test the mock API:**
   ```bash
   ./test-mock-api.sh
   ```

2. **Update documentation:**
   ```bash
   npm run update-docs
   ```

3. **Restart the environment:**
   ```bash
   npm run start-mock
   ```
