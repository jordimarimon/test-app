import { visualizer } from 'rollup-plugin-visualizer';
import { inlineCss } from './scripts/inline-css';
import handlebars from 'vite-plugin-handlebars';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import path from 'path';


const {pathname: cwd} = new URL('.', import.meta.url);

export default defineConfig({
    root: './src',
    build: {
        outDir: path.join(cwd, 'dist'),
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
            plugins: [
                analyze({
                    summaryOnly: true,
                }),
                visualizer(),
            ],
        },
    },
    server: {
        port: 8000,
    },
    plugins: [
        handlebars({
            partialDirectory: path.join(cwd, 'src', 'partials'),
        }),
        inlineCss(),
    ],
});
