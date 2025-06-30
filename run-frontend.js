#!/usr/bin/env node

// Simple script to run the frontend-only Viram Tech website
import { spawn } from 'child_process';
import path from 'path';

console.log('Starting Viram Tech Website (Frontend Only)...');

const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: path.join(process.cwd(), 'client'),
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (error) => {
  console.error('Failed to start frontend:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Frontend server exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down frontend server...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nShutting down frontend server...');
  viteProcess.kill('SIGTERM');
});