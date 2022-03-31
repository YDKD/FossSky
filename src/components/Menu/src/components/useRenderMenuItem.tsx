/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 13:48:37
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-28 17:31:14
 */
import { useDesign } from '@/hooks'
import { ElMenuItem, ElSubMenu } from 'element-plus'
import { handleChildren } from '../helper'
import { useRenderMenuTitle } from './useRenderMenuTitle'

export const useRenderMenuItem = (routeList: CustomRouteRecordRaw[]) => {
  const renderMenuItem = (routes?: CustomRouteRecordRaw[]) => {
    const { renderMenuTitle } = useRenderMenuTitle()
    // handle every route
    return (routes || routeList).map((r) => {
      const meta = (r.meta ?? {}) as RouteMeta
      // to handle following situations to use ElMenuItem
      // 1. only has one child
      // 2. don't have child

      // has more than one child to use ElSubMenu

      const { oneShowingChild, onlyOneChild } = handleChildren(r.children, r)
      if (oneShowingChild && !onlyOneChild?.children) {
        return (
          <ElMenuItem index={r.fullPath}>
            {{
              default: () => renderMenuTitle(meta)
            }}
          </ElMenuItem>
        )
      } else {
        const preFixCls = useDesign('prefix', 'menu-popper')
        return (
          <ElSubMenu index={r.path} popperClass={`${preFixCls}--vertical`}>
            {{
              title: () => renderMenuTitle(meta),
              default: () => renderMenuItem(r.children)
            }}
          </ElSubMenu>
        )
      }
    })
    // return (
    //   <ElMenuItem index="1">
    //     {{
    //       default: () => renderMenuTitle()
    //     }}
    //   </ElMenuItem>
    // )
  }

  return {
    renderMenuItem
  }
}
