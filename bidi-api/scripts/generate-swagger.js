const { NestFactory } = require('@nestjs/core');
const { SwaggerModule, DocumentBuilder } = require('@nestjs/swagger');
const { writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');
const { AppModule } = require('../dist/app.module');

async function generateSwaggerDocs() {
  try {
    console.log('🚀 Generating Swagger documentation...');
    
    // Create a minimal app instance for documentation generation
    const app = await NestFactory.create(AppModule, {
      logger: false, // Disable logging for faster generation
    });

    // Set global prefix
    app.setGlobalPrefix('api/v1');

    // Swagger configuration
    const config = new DocumentBuilder()
      .setTitle('Bidi Todo API')
      .setDescription('A production-grade todo API with comprehensive features')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('todos', 'Todo management endpoints')
      .addTag('auth', 'Authentication endpoints')
      .addTag('health', 'Health check endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    // Create docs directory if it doesn't exist
    const docsDir = join(__dirname, '..', 'docs');
    mkdirSync(docsDir, { recursive: true });

    // Generate static files
    const swaggerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bidi Todo API Documentation</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css" />
    <style>
        html {
            box-sizing: border-box;
            overflow: -moz-scrollbars-vertical;
            overflow-y: scroll;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
        body {
            margin:0;
            background: #fafafa;
        }
        .swagger-ui .topbar {
            background-color: #2c3e50;
        }
        .swagger-ui .topbar .download-url-wrapper .select-label {
            color: #fff;
        }
        .swagger-ui .info .title {
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js"></script>
    <script>
        window.onload = function() {
            const ui = SwaggerUIBundle({
                url: './swagger.json',
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout",
                persistAuthorization: true,
                tryItOutEnabled: true,
                requestInterceptor: function(request) {
                    // Add base URL for API calls
                    if (!request.url.startsWith('http')) {
                        request.url = 'http://localhost:3000' + request.url;
                    }
                    return request;
                }
            });
        };
    </script>
</body>
</html>`;

    // Write files
    writeFileSync(join(docsDir, 'index.html'), swaggerHtml);
    writeFileSync(join(docsDir, 'swagger.json'), JSON.stringify(document, null, 2));

    // Also copy to root project for frontend developers
    const rootDocsDir = join(__dirname, '..', '..', 'api-docs');
    mkdirSync(rootDocsDir, { recursive: true });
    writeFileSync(join(rootDocsDir, 'index.html'), swaggerHtml);
    writeFileSync(join(rootDocsDir, 'swagger.json'), JSON.stringify(document, null, 2));

    await app.close();
    
    console.log('✅ Swagger documentation generated successfully!');
    console.log('📁 Files created:');
    console.log(`   - ${join(docsDir, 'index.html')}`);
    console.log(`   - ${join(docsDir, 'swagger.json')}`);
    console.log(`   - ${join(rootDocsDir, 'index.html')}`);
    console.log(`   - ${join(rootDocsDir, 'swagger.json')}`);
    console.log('\n🌐 To view the documentation:');
    console.log('   1. Run: npm run serve-docs');
    console.log('   2. Open: http://localhost:8080');
    console.log('\n📝 Note: API calls will be made to http://localhost:3000');
    
  } catch (error) {
    console.error('❌ Error generating Swagger documentation:', error);
    process.exit(1);
  }
}

generateSwaggerDocs();
