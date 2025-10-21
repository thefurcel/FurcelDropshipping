# Railway Troubleshooting Checklist

## ✅ Pre-Deployment Checklist

- [ ] `package.json` is in root directory
- [ ] `src/` folder contains your code
- [ ] `tsconfig.json` exists
- [ ] `nixpacks.toml` is configured
- [ ] GitHub repository is public
- [ ] All files are committed to GitHub

## 🔧 Railway Settings

### Build Settings
- **Builder:** Nixpacks (not Docker)
- **Root Directory:** (leave empty)
- **Build Command:** `npm run build`
- **Start Command:** `npm start`

### Environment Variables
```
NODE_ENV=production
PORT=3000
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_secret
SHOPIFY_HOST=https://your-app.railway.app
SHOPIFY_SCOPES=write_products,read_products,write_orders,read_orders,write_fulfillments,read_fulfillments
```

## 🚨 Common Errors & Solutions

### Error: "Could not determine how to build"
**Solution:** Use Nixpacks builder, not Docker

### Error: "npm ci failed"
**Solution:** Use `npm install` in nixpacks.toml

### Error: "App crashed"
**Solution:** Check PORT environment variable and start script

### Error: "Build succeeded but app won't start"
**Solution:** Verify `npm start` script points to correct file

## 🔍 Debug Steps

1. **Check Railway logs:**
   - Go to your project dashboard
   - Click "View Logs"
   - Look for error messages

2. **Test locally:**
   - Install Node.js
   - Run `npm install`
   - Run `npm run build`
   - Run `npm start`

3. **Verify GitHub structure:**
   - Make sure all files are in root
   - No nested folders

## 🚀 Quick Fix Commands

If you have Node.js installed:
```bash
# Generate package-lock.json
npm install

# Test build
npm run build

# Test start
npm start
```

## 📞 Need Help?

If you're still having issues:
1. Share the exact error message from Railway logs
2. Check your GitHub repository structure
3. Verify Railway project settings
4. Try creating a new Railway project

