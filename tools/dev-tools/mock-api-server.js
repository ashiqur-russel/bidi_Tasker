const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Mock database with realistic data
const mockDatabase = {
  todos: [
    {
      _id: '507f1f77bcf86cd799439011',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the tasker project',
      completed: false,
      priority: 'high',
      dueDate: '2024-01-15T00:00:00.000Z',
      createdAt: '2024-01-01T10:00:00.000Z',
      updatedAt: '2024-01-01T10:00:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439012',
      title: 'Implement user authentication',
      description: 'Add JWT-based authentication system',
      completed: true,
      priority: 'high',
      dueDate: '2024-01-10T00:00:00.000Z',
      createdAt: '2024-01-01T09:00:00.000Z',
      updatedAt: '2024-01-05T15:30:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439013',
      title: 'Design responsive UI',
      description: 'Create mobile-friendly interface design',
      completed: false,
      priority: 'medium',
      dueDate: '2024-01-20T00:00:00.000Z',
      createdAt: '2024-01-02T11:00:00.000Z',
      updatedAt: '2024-01-02T11:00:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439014',
      title: 'Write unit tests',
      description: 'Add comprehensive test coverage',
      completed: false,
      priority: 'medium',
      dueDate: '2024-01-25T00:00:00.000Z',
      createdAt: '2024-01-03T14:00:00.000Z',
      updatedAt: '2024-01-03T14:00:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439015',
      title: 'Deploy to production',
      description: 'Set up CI/CD pipeline and deploy',
      completed: false,
      priority: 'low',
      dueDate: '2024-01-30T00:00:00.000Z',
      createdAt: '2024-01-04T16:00:00.000Z',
      updatedAt: '2024-01-04T16:00:00.000Z'
    }
  ],
  users: [
    {
      _id: '507f1f77bcf86cd799439021',
      username: 'john_doe',
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      createdAt: '2024-01-01T08:00:00.000Z',
      updatedAt: '2024-01-01T08:00:00.000Z'
    },
    {
      _id: '507f1f77bcf86cd799439022',
      username: 'jane_smith',
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      createdAt: '2024-01-01T09:00:00.000Z',
      updatedAt: '2024-01-01T09:00:00.000Z'
    }
  ]
  // 🆕 ADD NEW COLLECTIONS HERE WHEN BACKEND ADDS NEW DTOs
  // Example:
  // projects: [
  //   {
  //     _id: '507f1f77bcf86cd799439031',
  //     name: 'Tasker App',
  //     description: 'Full-stack task management application',
  //     status: 'active',
  //     createdAt: '2024-01-01T10:00:00.000Z',
  //     updatedAt: '2024-01-01T10:00:00.000Z'
  //   }
  // ]
}

// Helper functions
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function parseQueryParams(queryString) {
  const params = {};
  if (queryString) {
    const pairs = queryString.split('&');
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key && value) {
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
  }
  return params;
}

function paginateData(data, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc') {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Sort data
  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (sortOrder === 'desc') {
      return new Date(bVal) - new Date(aVal);
    }
    return new Date(aVal) - new Date(bVal);
  });

  const paginatedData = sortedData.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: data.length,
      totalPages: Math.ceil(data.length / limit),
      hasNext: endIndex < data.length,
      hasPrev: page > 1
    }
  };
}

function filterTodos(todos, status, priority) {
  let filtered = [...todos];

  if (status) {
    filtered = filtered.filter(todo => {
      if (status === 'completed') return todo.completed === true;
      if (status === 'pending') return todo.completed === false;
      return true;
    });
  }

  if (priority) {
    filtered = filtered.filter(todo => todo.priority === priority);
  }

  return filtered;
}

// API Routes
const routes = {
  // Health check endpoints
  'GET:/api/v1/health': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      info: {
        database: { status: 'up' }
      },
      details: {
        database: { status: 'up' }
      }
    }));
  },

  'GET:/api/v1/health/live': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  },

  'GET:/api/v1/health/ready': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  },

  // Root endpoint
  'GET:/api/v1': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Bidi Todo API - Mock Server',
      version: '1.0.0',
      status: 'running'
    }));
  },

  // Todo endpoints
  'GET:/api/v1/todos': (req, res) => {
    const { query } = url.parse(req.url, true);
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', status, priority } = query;

    let todos = filterTodos(mockDatabase.todos, status, priority);
    const result = paginateData(todos, page, limit, sortBy, sortOrder);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  },

  'POST:/api/v1/todos': (req, res) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const todoData = JSON.parse(body);
        const newTodo = {
          _id: generateId(),
          title: todoData.title,
          description: todoData.description || '',
          completed: todoData.completed || false,
          priority: todoData.priority || 'medium',
          dueDate: todoData.dueDate || null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        mockDatabase.todos.push(newTodo);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTodo));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  },

  'GET:/api/v1/todos/stats': (req, res) => {
    const todos = mockDatabase.todos;
    const stats = {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      pending: todos.filter(t => !t.completed).length,
      byPriority: {
        high: todos.filter(t => t.priority === 'high').length,
        medium: todos.filter(t => t.priority === 'medium').length,
        low: todos.filter(t => t.priority === 'low').length
      },
      completionRate: Math.round((todos.filter(t => t.completed).length / todos.length) * 100)
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(stats));
  },

  'GET:/api/v1/todos/:id': (req, res) => {
    const id = req.params.id;
    const todo = mockDatabase.todos.find(t => t._id === id);

    if (!todo) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todo));
  },

  'PATCH:/api/v1/todos/:id': (req, res) => {
    const id = req.params.id;
    const todoIndex = mockDatabase.todos.findIndex(t => t._id === id);

    if (todoIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const updates = JSON.parse(body);
        const updatedTodo = {
          ...mockDatabase.todos[todoIndex],
          ...updates,
          updatedAt: new Date().toISOString()
        };

        mockDatabase.todos[todoIndex] = updatedTodo;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedTodo));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  },

  'PATCH:/api/v1/todos/:id/toggle': (req, res) => {
    const id = req.params.id;
    const todoIndex = mockDatabase.todos.findIndex(t => t._id === id);

    if (todoIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
      return;
    }

    const updatedTodo = {
      ...mockDatabase.todos[todoIndex],
      completed: !mockDatabase.todos[todoIndex].completed,
      updatedAt: new Date().toISOString()
    };

    mockDatabase.todos[todoIndex] = updatedTodo;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(updatedTodo));
  },

  'DELETE:/api/v1/todos/:id': (req, res) => {
    const id = req.params.id;
    const todoIndex = mockDatabase.todos.findIndex(t => t._id === id);

    if (todoIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
      return;
    }

    const deletedTodo = mockDatabase.todos.splice(todoIndex, 1)[0];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Todo deleted successfully',
      deletedTodo
    }));
  }
};

// Server setup
const PORT = process.env.MOCK_API_PORT || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Extract route parameters
  let routeKey = `${method}:${pathname}`;
  let params = {};

  // Handle dynamic routes with parameters
  if (pathname.startsWith('/api/v1/todos/') && pathname !== '/api/v1/todos/stats') {
    const id = pathname.split('/').pop();
    if (id && id !== 'todos') {
      params.id = id;
      routeKey = `${method}:/api/v1/todos/:id`;
    }
  }

  // Add params to request object
  req.params = params;
  req.query = parsedUrl.query;

  // Find and execute route handler
  const handler = routes[routeKey];

  if (handler) {
    try {
      handler(req, res);
    } catch (error) {
      console.error('Error handling request:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Mock API Server running at http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:8080`);
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
  console.log(`\n💡 Tips:`);
  console.log(`   - All endpoints return realistic mock data`);
  console.log(`   - Supports pagination, filtering, and sorting`);
  console.log(`   - Data persists during server session`);
  console.log(`   - Press Ctrl+C to stop the server`);
  console.log(`\n🆕 To add new endpoints:`);
  console.log(`   1. Add mock data to mockDatabase object above`);
  console.log(`   2. Add route handlers to routes object below`);
  console.log(`   3. Update this console.log section`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Mock API Server...');
  server.close(() => {
    console.log('✅ Mock API Server stopped');
    process.exit(0);
  });
});