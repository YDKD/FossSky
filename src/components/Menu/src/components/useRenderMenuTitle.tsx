/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 11:59:45
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-28 17:05:00
 */
import { Icon } from '@/components/Icon'
import { RouteMeta } from 'vue-router'

export const useRenderMenuTitle = () => {
  const renderMenuTitle = (meta?: RouteMeta) => {
    const icon = meta?.icon?.split('-')[1]
    return (
      <>
        <Icon icon={icon}></Icon>
        <span class="foss-menu__title">{meta?.title}</span>
      </>
    )
  }

  return {
    renderMenuTitle
  }
}
