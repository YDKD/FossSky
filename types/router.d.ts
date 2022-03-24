import type { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    hidden?: boolean
    alwaysShow?: boolean
    title?: string
    icon?: string
    noCache?: boolean
    breadcrumb?: boolean
    affix?: boolean
    activeMenu?: string
    noTagsView?: boolean
    followAuth?: string
    canTo?: boolean
  }
}

type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

interface RouteMeta extends Record<string | number | symbol, unknown> {
  hidden?: boolean
  alwaysShow?: boolean
  title?: string
  icon?: string
  noCache?: boolean
  breadcrumb?: boolean
  affix?: boolean
  activeMenu?: string
  noTagsView?: boolean
  followAuth?: string
  canTo?: boolean
}

declare global {
  type CustomRouteRecordRaw = RouteRecordRaw & {
    path: string
    name: string
    meta: RouteMeta
    component?: Component | string
    children?: CustomRouteRecordRaw[]
  }

  interface RouteItem {
    id: number
    pid: number
    name: string
    path: string
    link: string
    title: string
    ico: string
    default_check: number
    children?: Array<RouteItem>
  }
}
