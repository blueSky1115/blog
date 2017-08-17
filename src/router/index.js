import Vue from 'vue'
import Router from 'vue-router'

import page from '@/components/page'
import Home from '@/components/homeView'
import List from '@/components/list'
import Essay from '@/components/essay'
import Myresume from '@/components/myresume'
import Sharepage from '@/components/sharepage'
import Show from '@/components/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: page
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List
    },
    {
      path: '/essay',
      name: 'essay',
      component: Essay
    },
    {
      path: '/myresume',
      name: 'myresume',
      component: Myresume
    },
    {
      path: '/sharepage',
      name: 'sharepage',
      component: Sharepage
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    }
  ]
})
