import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import signin from '@/components/signin'
import home from '@/components/home'
// import flowerDetail from '@/components/flowerDetail'

import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,
      meta:{
        notneedfoot:true
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
      meta:{
        notneedfoot:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        notneedfoot:false
      }
    },
    {
      path: '/flowerDetail',
      name: 'flowerDetail',
      component: resolve=>(require(["@/components/flowerDetail"],resolve)),
      meta:{
        notneedfoot:false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        notneedfoot:false
      }
    },


  ]
})
