import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    meta: { title: '首页' },
    component: () => import('./pages/index.vue')
  }, {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('./pages/login.vue')
  }, {
    path: '/dashboard',
    meta: { title: '仪表盘' },
    component: () => import('./pages/dashboard/index.vue')
  }]
})
