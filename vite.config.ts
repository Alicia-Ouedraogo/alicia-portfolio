import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alicia-portfolio/',  // <-- ajoute cette ligne ici
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
