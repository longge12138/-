import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import signin from '@/components/signin'
import home from '@/components/home'

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


  ]
})
