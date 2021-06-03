import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard/:page',
      name: 'dashboardPage',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/add/payment/:category',
      name: 'addPaymentPreset',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/add/payment*',
      name: 'addPaymentManual',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../page/Page404')
    }
  ]
})
