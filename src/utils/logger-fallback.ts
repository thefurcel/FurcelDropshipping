// Fallback logger for production
const createFallbackLogger = () => {
  return {
    info: (obj: any, msg?: string) => console.log(`[INFO] ${msg || ''}`, obj || ''),
    error: (obj: any, msg?: string) => console.error(`[ERROR] ${msg || ''}`, obj || ''),
    warn: (obj: any, msg?: string) => console.warn(`[WARN] ${msg || ''}`, obj || ''),
    debug: (obj: any, msg?: string) => console.log(`[DEBUG] ${msg || ''}`, obj || ''),
  };
};

// Try to use pino, fallback to console if it fails
let logger: any;
try {
  const pino = require('pino');
  logger = pino({
    level: process.env.LOG_LEVEL || 'info',
  });
} catch (error) {
  console.warn('Failed to load pino, using fallback logger');
  logger = createFallbackLogger();
}

export { logger };

