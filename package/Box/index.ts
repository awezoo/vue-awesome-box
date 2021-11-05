import { Plugin } from 'vue'
import Box from './Box.vue'

const plugin: Plugin = {
    install(app) {
        app.component('AweBox', Box)
    },
}

export default plugin
export * from './types'
export { Box }
