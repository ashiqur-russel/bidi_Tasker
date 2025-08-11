const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.DOCS_PORT || 8080;
const DOCS_DIR = path.join(__dirname, 'api-docs');

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.json': 'application/json',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Default to index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    const filePath = path.join(DOCS_DIR, pathname);
    const extname = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Security: prevent directory traversal
    if (!filePath.startsWith(DOCS_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`📚 API Documentation server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${DOCS_DIR}`);
    console.log(`🔗 Open your browser and navigate to: http://localhost:${PORT}`);
    console.log(`\n💡 Tips:`);
    console.log(`   - Press Ctrl+C to stop the server`);
    console.log(`   - API calls will be made to http://localhost:3000`);
    console.log(`   - Update docs by running: npm run generate-docs`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down documentation server...');
    server.close(() => {
        console.log('✅ Documentation server stopped');
        process.exit(0);
    });
});
