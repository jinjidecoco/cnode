// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'
import '@/assets/font_icon/iconfont.css'
import '@/assets/css/common.less'

Vue.prototype.$http = axios
Vue.config.productionTip = false



import FastClick from 'fastclick'
FastClick.attach(document.body)

/* eslisnt-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
