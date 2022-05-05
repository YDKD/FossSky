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
    path: '/test-1',
    component: () => import('@/views/test/index.vue'),
    meta: {
      title: '通行扫码'
    }
  },
  {
    path: '/test-2',
    component: () => import('@/views/test/a.vue'),
    meta: {
      title: '通行扫码'
    }
  },
  {
    path: '/test-3',
    component: () => import('@/views/test/b.vue'),
    meta: {
      title: '通行扫码'
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
