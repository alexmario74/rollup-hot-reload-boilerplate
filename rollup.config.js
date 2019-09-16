import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';

module.exports = {
    input: 'src/app.ts',
    output: {
        file: 'public/main.js',
        sourcemap: true,
        format: 'iife'
    },
    plugins: [
        serve('public'),
        livereload('public'),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: true
                }
            }
        })
    ]
};
