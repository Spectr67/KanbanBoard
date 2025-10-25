import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')

// файлы
// camelCase
// camel
// PascalCase
// Pascal

// папки
// kebab-case
// kebab

// kanban-board
// simple-kanban-board
