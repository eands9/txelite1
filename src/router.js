import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from '@/views/Dashboard'
import Schedule from '@/views/Schedule'
import Roster from '@/views/Roster'
import Chat from '@/views/Chat'
import Placeholder1 from '@/views/Placeholder1'
import Placeholder2 from '@/views/Placeholder2'
import Placeholder3 from '@/views/Placeholder3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/roster',
      name: 'roster',
      component: Roster
    },
    {
      path: '/placeholder1',
      name: 'placeholder1',
      component: Placeholder1
    },
    {
      path: '/placeholder2',
      name: 'placeholder2',
      component: Placeholder2
    },
    {
      path: '/placeholder3',
      name: 'placeholder3',
      component: Placeholder3
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
