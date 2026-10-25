import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Nothing here needs editing for normal use.
export default defineConfig({
  plugins: [react()],
  base: './',
});
