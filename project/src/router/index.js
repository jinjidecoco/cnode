import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/list'
import detail from'@/pages/detail'


Vue.use(Router)

var router =new Router();

export default new Router({
  // mode:'history',
    // scrollBehavior (to, from, savedPosition) {
    //   if (savedPosition){
    //     console.log(savedPosition);
    //       return savedPosition;
    //   }else{
    //        return { x: 0, y: 0 }
    //   }
    // },
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail
    }

  ]

})

