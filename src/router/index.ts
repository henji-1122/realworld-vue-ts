import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/Login.vue')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('@/views/Edit/Edit.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article/Article.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile/Profile.vue')
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings/Settings.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
