import express from 'express';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Simple health check
app.get('/health', (_req, res) => {
  res.json({ 
    ok: true, 
    version: '0.1.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Basic API endpoint
app.get('/api/test', (_req, res) => {
  res.json({ message: 'API is working' });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

console.log('Minimal server started');

