import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'package/index.ts'),
            name: 'AweBox',
            fileName: (format) => `awe-box.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
        eslintPlugin({
            include: [
                'src/**/*.js',
                'src/**/*.jsx',
                'src/**/*.ts',
                'src/**/*.tsx',
                'src/**/*.vue',
                'package/**/*.ts',
                'package/**/*.vue',
            ],
        }),
        dts(),
    ],
})
