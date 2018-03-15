import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'Mint-ui'
import 'mint-ui/lib/style.css'
import Home from '@/components/Home'
import Demo from '@/components/Demo'


Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/first/:id',
      // name: 'first',
      component: {
      	template:'<h2>first {{ $route.params.id }} </h2>',
	        children:[
		      {
		          path:'',
		          component:{template:'<div>我是1</div>'}
		      },
		      {   
		      	path:'two',
		        component:{template:'<div>我是2</div>'}
		      }
            ]
        }    
    },
    {
      path: '/second',
      name: 'second',
      component: {template:'<h2>第二</h2>'}
    },

  ]
})
