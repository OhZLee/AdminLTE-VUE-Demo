import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/components/common/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-dashboard',
      component: AppDashboard
    }
  ]
})
