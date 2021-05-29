import Vue from 'vue'
import Router from 'vue-router'

import PageAbout from '../page/PageAbout'
import PageDashboard from '../page/PageDashboard'
import Page404 from '../page/Page404'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
})
