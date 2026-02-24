import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                zonen: resolve(__dirname, 'zonen.html'),
                near_miss: resolve(__dirname, 'near-miss.html'),
                downloads: resolve(__dirname, 'downloads.html'),
                register: resolve(__dirname, 'register.html'),
                impressum: resolve(__dirname, 'impressum.html'),
            },
        },
    },
});
