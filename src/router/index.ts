import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

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
    path: '/edit',
    component: Layout,
    children: [
      {
        path: 'person',
        meta: {
          title: '人员编辑'
        },
        component: () => import('@/views/manage/components/edit.vue')
      }
    ]
  },
  {
    path: '/add',
    component: Layout,
    children: [
      {
        path: 'person',
        meta: {
          title: '人员添加'
        },
        component: () => import('@/views/manage/components/add.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
