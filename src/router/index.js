import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[{
        path: '',
        redirect: '/home'
      },{
        path:'home',
        name: 'home',
        component: Home
      },{
        path:'about',
        name:'about',
        component: About
      }]
    }
  ]
})
