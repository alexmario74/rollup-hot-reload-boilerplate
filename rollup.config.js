import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

module.exports = {
    input: 'src/app.js',
    output: {
        file: 'public/main.js',
        sourcemap: true,
        format: 'iife',
        name: 'main'
    },
    plugins: [
        serve('public'),
        livereload('public')
    ]
};
