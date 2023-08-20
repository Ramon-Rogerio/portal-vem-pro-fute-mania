import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';
import * as path from 'path';
import { existsSync } from 'fs';

dotenv.config({
  path: existsSync('.env') ? '.env' : path.resolve('envs', `.env.${process.env.NODE_ENV}`)
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@@': path.resolve(__dirname),
        '@': path.resolve(__dirname, 'src')
    }
},
})
