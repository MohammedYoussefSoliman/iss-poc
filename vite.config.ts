import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@locales': path.resolve(__dirname, './src/shared/locales'),
      '@state': path.resolve(__dirname, './src/state'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@providers': path.resolve(__dirname, './src/Providers'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@layouts': path.resolve(__dirname, './src/shared/layouts'),
      '@components': path.resolve(__dirname, './src/shared/components'),
    },
  },
});
