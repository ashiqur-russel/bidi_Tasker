# Environment Configuration

This directory contains environment-specific configuration files for the Angular application.

## Files

- `environment.ts` - Production environment configuration (⚠️ NOT committed to Git)
- `environment.development.ts` - Development environment configuration (✅ Committed to Git)
- `environment.staging.ts` - Staging environment configuration (⚠️ NOT committed to Git)
- `environment.template.ts` - Template for new environments (✅ Committed to Git)
- `environment.production.template.ts` - Production template (✅ Committed to Git)
- `environment.staging.template.ts` - Staging template (✅ Committed to Git)

## Configuration Properties

### `production`
- **Type**: `boolean`
- **Description**: Indicates if the application is running in production mode
- **Development**: `false`
- **Production**: `true`

### `apiUrl`
- **Type**: `string`
- **Description**: Base URL for the API endpoints
- **Development**: `http://localhost:3000/api/v1`
- **Staging**: `https://staging-api.tasker.com/api/v1`
- **Production**: `https://api.tasker.com/api/v1`

## Git Best Practices

### ✅ What to Commit
- `environment.development.ts` - Safe for development
- `environment.template.ts` - Template files
- `environment.production.template.ts` - Production template
- `environment.staging.template.ts` - Staging template

### ❌ What NOT to Commit
- `environment.production.ts` - Contains production URLs
- `environment.staging.ts` - Contains staging URLs
- `.env` files - Environment variables
- Any files with real API keys or secrets

## Setup Instructions

### For New Developers
1. Clone the repository
2. Copy template files to create your environment files:
   ```bash
   cp src/environments/environment.production.template.ts src/environments/environment.ts
   cp src/environments/environment.staging.template.ts src/environments/environment.staging.ts
   ```
3. Update the URLs in the copied files with your actual API endpoints

### For Deployment
1. Create environment files from templates
2. Update with actual production/staging URLs
3. Build with appropriate configuration:
   ```bash
   npm run build:production  # Uses environment.ts
   npm run build:staging     # Uses environment.staging.ts
   ```

## Usage

The environment configuration is automatically loaded based on the build configuration:

- `npm start` or `ng serve` - Uses development environment
- `ng build` - Uses production environment
- `ng build --configuration=staging` - Uses staging environment

## Adding New Environment Variables

1. Add the property to all environment files (including templates)
2. Update this README with the new property documentation
3. Use `environment.propertyName` in your services/components

## Example

```typescript
import { environment } from '../environments/environment';

// Use environment variables
const apiUrl = environment.apiUrl;
const isProduction = environment.production;
```

## Security Notes

- Never commit real API keys or secrets to Git
- Use environment variables for sensitive data in production
- Keep template files updated with all required properties
- Document any new environment variables in this README
