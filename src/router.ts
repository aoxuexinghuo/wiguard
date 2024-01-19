import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/login.vue'
import Index from './pages/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    }
  ]
})