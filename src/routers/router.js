import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import AllPostsView from '@/views/AllPostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'landing-page',
      component: LandingView
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/all-posts',
      name: 'all-posts',
      component: AllPostsView
    }
  ]
})

export default router