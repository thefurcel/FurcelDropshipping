const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'The Furcel Dropshipping App is running!',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      api: '/api/test',
      fulfillment: '/api/fulfillment',
      products: '/api/products',
      orders: '/api/orders'
    },
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    ok: true, 
    version: '0.1.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Basic API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

console.log('Ultra-minimal server started');

