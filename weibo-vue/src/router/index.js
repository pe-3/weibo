import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './routes/home/index.vue'
import homeHome from './routes/home/home/index.vue'
import Sign from './routes/sign/index.vue'
import SignIn from './routes/sign/signin/index.vue'
import SignUp from './routes/sign/signup/index.vue'
import Create from './routes/home/create/index.vue'
import User from './routes/home/user/index.vue'

import store from '../store'

const routes = [
  { 
    path: '/',
    component: Home, 
    alias: '/index',
    children: [
      { path: '', alias: 'home-home', component: homeHome },
      { path: 'create', component: Create },
      { path: 'user', component: User }
    ]
  },
  {
    path: '/sign',
    component: Sign,
    name: 'sign',
    children: [
      {
        path: '',
        alias: '/signin',
        component: SignIn,
        name: 'signin'
      },
      {
        path: 'signup',
        component: SignUp,
        name: 'signup'
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'signup') {
    return next();
  }
  // 判断登陆
  if (
    // 检查用户是否已登录
    !store.state.auth.token &&
    // ❗️ 避免无限重定向
    to.name !== 'signin'
  ) {
    // 将用户重定向到登录页面
    return next({ path: '/sign' })
  }
  next();
})


export default router