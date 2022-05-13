import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import path from 'path';


const {pathname: cwd} = new URL('.', import.meta.url);

export default defineConfig({
    root: './src',
    build: {
        outDir: path.join(cwd, 'dist'),
    },
    server: {
        port: 8000,
    },
    plugins: [
        handlebars({
            partialDirectory: path.join(cwd, 'src', 'partials'),
        }),
    ],
});
