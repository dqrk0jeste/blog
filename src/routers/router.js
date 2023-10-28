import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import AllPostsView from '@/views/AllPostsView.vue'
import OnePostView from '@/views/OnePostView.vue'
import CreatePostView from '@/views/CreatePostView.vue'

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
    },
    {
      path: '/post/:id',
      name: 'post',
      component: OnePostView
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePostView
    }
  ]
})

export default router