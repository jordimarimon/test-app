import { IndexHtmlTransformResult, IndexHtmlTransformContext, Plugin } from 'vite';
import { OutputAsset } from 'rollup';


export function inlineCss(): Plugin {
    return {

        name: 'vite:inlineCss',

        transformIndexHtml: {

            enforce: 'post',

            transform(html: string, ctx?: IndexHtmlTransformContext): IndexHtmlTransformResult {

                if (!ctx || !ctx.bundle) {
                    return html;
                }

                for (const [, value] of Object.entries(ctx.bundle)) {
                    const a = value as OutputAsset;

                    if (a.fileName.endsWith('.css')) {
                        const reCSS = new RegExp(`<link rel="stylesheet"[^>]*?href="[\./]*${a.fileName}"[^>]*?>`);
                        const code = `<style>${String(a.source).replace(/(\r\n|\n|\r)/gm, '')}</style>`;

                        html = html.replace(reCSS, (_) => code);
                    }
                }

                return html;

            },

        },

    };
}
