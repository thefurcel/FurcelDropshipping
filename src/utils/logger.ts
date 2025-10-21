import pino from 'pino';

// Simple logger configuration for production
const loggerConfig: any = {
  level: process.env.LOG_LEVEL || 'info',
};

// Only add pretty transport in development
if (process.env.NODE_ENV !== 'production') {
  try {
    loggerConfig.transport = { target: 'pino-pretty' };
  } catch (error) {
    // Fallback if pino-pretty is not available
    console.warn('pino-pretty not available, using basic logger');
  }
}

export const logger = pino(loggerConfig);


