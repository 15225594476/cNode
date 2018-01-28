import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Header from '@/components/header'
import HelloWorld from '@/components/HelloWorld'
import ChildXiang from '@/components/child/childXiang'
import AuthorXiang from '@/components/AuthorXiang'
import Signin from '@/components/signin'
import Huati from '@/components/Huati'
import Huifu from '@/components/HuiFu'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 主页详情
    {
      path: '/childXiang',
      name: 'ChildXiang',
      component: ChildXiang
    },
    // 用户详情
    {
      path: '/AuthorXiang',
      name: 'AuthorXiang',
      component: AuthorXiang
    },
    // 登陆
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    // 话题
    {
      path: '/huati',
      name: 'Huati',
      component: Huati
    },
    // 发布成功
    {
      path: '/huifu',
      name: 'Huifu',
      component: Huifu
    }
  ]
})
