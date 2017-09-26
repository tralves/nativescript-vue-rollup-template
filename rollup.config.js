import vue from 'rollup-plugin-vue'
import cleanup from 'rollup-plugin-cleanup'
import css from 'rollup-plugin-css-only'

export default {
    input: './app/main.js',
    output: {
        file: './tns/app/app.js',
        format: 'cjs',
    },
    name: 'NativeScript-Vue-App',
    sourceMap: false,

    plugins: [
        vue({
            compileTemplate: false
        }),
        css({ output: './tns/app/app.css' }),
        cleanup({
            extensions: ['.js', '.css']
        })

    ],
    external(id) {
        return id.startsWith('ui/') || id.startsWith('application')
    },
};