# Troubleshooting Guide for Frontend Developers

This guide helps you resolve common issues when using the mock API and documentation.

## 🚨 Common Issues and Solutions

### **Issue 1: "Failed to load API definition" in Swagger UI**

**Symptoms:**
- Swagger UI shows "Failed to load API definition"
- 404 errors when trying to access endpoints
- API calls going to wrong URL

**Solutions:**
1. **Regenerate documentation:**
   ```bash
   npm run generate-docs
   ```

2. **Clear browser cache:**
   - Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
   - Or open browser in incognito/private mode

3. **Check server selection in Swagger UI:**
   - Look for the server dropdown in the top-right of Swagger UI
   - Make sure it's set to `http://localhost:3000`

### **Issue 2: "404 Not Found" when testing API endpoints**

**Symptoms:**
- API calls return 404 errors
- Endpoints not found

**Solutions:**
1. **Start the mock API server:**
   ```bash
   npm run mock-api
   ```

2. **Check if mock API is running:**
   ```bash
   curl http://localhost:3000/api/v1/health
   ```

3. **Use the complete setup:**
   ```bash
   npm run start-mock
   ```

### **Issue 3: Port conflicts**

**Symptoms:**
- "Address already in use" errors
- Can't start servers

**Solutions:**
1. **Stop existing processes:**
   ```bash
   pkill -f "mock-api-server.js"
   pkill -f "serve-docs.js"
   ```

2. **Use different ports:**
   ```bash
   MOCK_API_PORT=3001 npm run mock-api
   DOCS_PORT=8081 npm run serve-docs
   ```

3. **Use the automated script:**
   ```bash
   npm run start-mock
   ```

### **Issue 4: No data returned from API**

**Symptoms:**
- Empty responses
- No todos in the list

**Solutions:**
1. **Test the API directly:**
   ```bash
   curl http://localhost:3000/api/v1/todos
   ```

2. **Check mock data:**
   ```bash
   ./test-mock-api.sh
   ```

3. **Restart the mock server:**
   ```bash
   npm run mock-api
   ```

### **Issue 5: CORS errors in frontend**

**Symptoms:**
- CORS errors in browser console
- Frontend can't access API

**Solutions:**
1. **The mock API already includes CORS headers**
2. **Check your frontend configuration:**
   ```javascript
   // Make sure your API base URL is correct
   const API_BASE_URL = 'http://localhost:3000/api/v1';
   ```

3. **Test with curl first:**
   ```bash
   curl -H "Origin: http://localhost:4200" http://localhost:3000/api/v1/todos
   ```

## 🔧 Quick Diagnostic Commands

### **Test Everything at Once:**
```bash
./test-mock-api.sh
```

### **Check Server Status:**
```bash
# Check mock API
curl http://localhost:3000/api/v1/health

# Check documentation
curl http://localhost:8080
```

### **View Server Logs:**
```bash
# Mock API logs
npm run mock-api

# Documentation logs
npm run serve-docs
```

## 🚀 Recommended Workflow

### **For New Setup:**
1. ```bash
   npm run start-mock
   ```
2. Open http://localhost:8080 in browser
3. Test endpoints from Swagger UI

### **For Daily Development:**
1. ```bash
   npm run start-mock
   ```
2. Work on your frontend
3. Test API calls through Swagger UI or your frontend

### **When API Changes:**
1. ```bash
   npm run update-docs
   ```
2. Restart the mock environment if needed

## 📞 Getting Help

If you're still having issues:

1. **Run the test script:**
   ```bash
   ./test-mock-api.sh
   ```

2. **Check the logs:**
   - Look for error messages in the terminal
   - Check browser console for JavaScript errors

3. **Verify your setup:**
   - Make sure you're in the project root directory
   - Ensure all dependencies are installed: `npm install`

4. **Common Solutions:**
   - Restart your terminal/command prompt
   - Clear browser cache
   - Use a different browser
   - Check if ports 3000 and 8080 are available

## 💡 Pro Tips

- **Use the test script** to verify everything is working
- **Keep the mock API running** while developing frontend
- **Use Swagger UI** to test endpoints before implementing in frontend
- **Check the server dropdown** in Swagger UI to ensure correct API URL
- **Use browser dev tools** to inspect network requests
