import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
//import HelloWorld from '@/components/HelloWorld'
import myIndex from '@/components/Index'
import myLogin from '@/components/Login'
import myChart from '@/components/MyChart'
import filmList from '@/components/FilmList'
import userList from '@/components/UserList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myIndex',
      redirect: '/index'
    },
    {
      path:'/login',
      component:myLogin
    },
    {
      path:'/index',
      component:myIndex,
      children:[
        {path:'',component:myChart},
        {path:'/myChart',component:myChart},
        {path:'/filmList',component:filmList},
        {path:'/userList',component:userList}
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
