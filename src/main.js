// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'admin-lte/dist/js/adminlte.min'
import AppHeader from '@/components/common/header'
import AppContent from '@/components/common/content'
import AppFooter from '@/components/common/footer'
import AppMenu from '@/components/common/menu'
import AppSidebar from '@/components/common/sidebar'

Vue.config.productionTip = false
Vue.component('app-header', AppHeader)
Vue.component('app-content', AppContent)
Vue.component('app-footer', AppFooter)
Vue.component('app-menu', AppMenu)
Vue.component('app-sidebar', AppSidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
