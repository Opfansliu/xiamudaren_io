import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
       component: () => import('../views/Home.vue') 
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
