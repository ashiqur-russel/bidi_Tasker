// MongoDB initialization script
db = db.getSiblingDB('bidi_todo');

// Create collections
db.createCollection('todos');
db.createCollection('users');

// Insert mock todos
db.todos.insertMany([
    {
        title: 'Complete project setup',
        description: 'Set up the initial project structure and dependencies',
        completed: false,
        priority: 'high',
        dueDate: new Date('2024-12-31'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Implement authentication',
        description: 'Add JWT authentication to the API',
        completed: false,
        priority: 'medium',
        dueDate: new Date('2024-12-25'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Create frontend components',
        description: 'Build React/Angular components for the todo app',
        completed: true,
        priority: 'low',
        dueDate: new Date('2024-12-20'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Write API documentation',
        description: 'Document all API endpoints and their usage',
        completed: false,
        priority: 'medium',
        dueDate: new Date('2024-12-28'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Deploy to production',
        description: 'Deploy the application to production environment',
        completed: false,
        priority: 'high',
        dueDate: new Date('2024-12-30'),
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Insert mock users
db.users.insertMany([
    {
        username: 'admin',
        email: 'admin@bidi.com',
        password: '$2b$10$example.hash.for.password',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: 'user1',
        email: 'user1@bidi.com',
        password: '$2b$10$example.hash.for.password',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

print('Database bidi_todo initialized with mock data');
