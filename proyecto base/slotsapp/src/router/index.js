import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../views/ReporteView.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/ManageView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
