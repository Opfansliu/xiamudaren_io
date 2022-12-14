import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
       component: HomeView
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/Life.vue')
    },
    {
      path: '/read',
      name: 'read',
      component: () =>import('../views/Read.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () =>import('../views/Skills.vue')
    }
    
  ]
})

export default router
