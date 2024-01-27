import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'
import 'vant/lib/index.css'

const modules = import.meta.glob('./pages/*.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: Object.keys(modules).map(path => {
    return {
      path: path.slice(7).replace(/index|.vue/g, ''),
      name: path.slice(8).replace(/.vue/g, ''),
      component: modules[path]
    }
  })
})

const app = createApp(App)
app.use(router)
app.mount('#app')
