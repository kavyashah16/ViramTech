// Frontend-only Viram Tech website startup
import { spawn } from 'child_process';

console.log('Starting Viram Tech Website (Frontend Only)');
console.log('Backend components removed - this is now a frontend-only application');

// Start Vite with custom config that allows Replit hosts
const viteArgs = [
  'vite',
  '--config', 'vite.frontend.config.ts',
  '--host', '0.0.0.0',
  '--port', '5000'
];

const viteProcess = spawn('npx', viteArgs, {
  cwd: process.cwd(),
  stdio: 'inherit'
});

viteProcess.on('error', (error) => {
  console.error('Failed to start frontend:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  process.exit(code || 0);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  viteProcess.kill('SIGTERM');
});