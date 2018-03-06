import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import demo from '@/pages/demo'
import detail from '@/pages/detail'


Vue.use(Router)

var router =new Router();

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path:'/demo',
      name:'demo',
      component:demo,
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail
    }
   //   {
   //    path: '*',
   //    component: Home
   // }
  ],
})

