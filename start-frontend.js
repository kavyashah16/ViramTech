#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';

// Start Vite dev server from client directory
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: path.join(process.cwd(), 'client'),
  stdio: 'inherit'
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Vite server exited with code ${code}`);
  process.exit(code);
});