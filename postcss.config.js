const production = process.env.PROD;
const plugins = {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-dir-pseudo-class': {dir: 'ltr'},
    'postcss-logical': {},
};

if (production) {
    plugins['@fullhuman/postcss-purgecss'] = {
        content: [
            './**/*.html',
            './**/*.ts',
        ],
    };
}

module.exports = {
    plugins,
};
