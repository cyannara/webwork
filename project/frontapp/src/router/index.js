import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/boardTable',
      name: 'boardTable',
      component: () => import('../views/boardTable.vue'),
    }, 
    {
      path: '/boardList',
      name: 'boardList',
      component: () => import('../views/BoardList.vue'),
    },    
    {
      path: '/boardInfo',
      name: 'boardInfo',
      component: () => import('../views/BoardInfo.vue'),
    },  
    {
      path: '/boardForm',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue'),
    },      
  ],
})

export default router
