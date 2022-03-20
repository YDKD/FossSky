import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/reset-pass',
    component: () => import('@/views/forgetPass/index.vue'),
    meta: {
      title: '重置密码'
    }
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
