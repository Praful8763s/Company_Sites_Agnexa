import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';

let PORT = parseInt(process.env.PORT, 10) || 5000;

const startServer = async (portToTry) => {
  await connectDB();

  const server = app.listen(portToTry, () => {
    console.log(`🚀 [Agnexa Backend] Server running in ${process.env.NODE_ENV || 'development'} mode on port ${portToTry}`);
    console.log(`🌐 [API Endpoints] Base URL: http://localhost:${portToTry}/api`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (process.env.NODE_ENV === 'production') {
        console.error(`❌ [Fatal] Port ${portToTry} is already in use in production. Exiting process.`);
        process.exit(1);
      } else {
        console.warn(`⚠️ [Port Warning] Port ${portToTry} is already in use. Retrying on port ${portToTry + 1}...`);
        setTimeout(() => {
          startServer(portToTry + 1);
        }, 500);
      }
    } else {
      console.error('Server error:', err);
    }
  });

  // Graceful shutdown handlers
  const handleShutdown = (signal) => {
    console.log(`\n🛑 [Agnexa Backend] Received ${signal}. Closing HTTP server gracefully...`);
    server.close(() => {
      console.log('✅ [Agnexa Backend] HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer(PORT);
