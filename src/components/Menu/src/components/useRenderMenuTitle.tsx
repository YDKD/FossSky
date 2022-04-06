/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 11:59:45
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-06 09:37:49
 */
import { Icon } from '@/components/Icon'
import { RouteMeta } from 'vue-router'

export const useRenderMenuTitle = () => {
  const renderMenuTitle = (meta?: RouteMeta) => {
    let icon
    const type = meta?.icon?.split('-')[0] == 'fa' ? 'iconify' : 'iconfont'
    if (type == 'iconify' ) {
      icon = meta?.icon?.split('-')[1]
    } else {
      icon = meta?.icon
    }
    return (
      <>
        <Icon icon={icon} type={type}></Icon>
        <span class="foss-menu__title">{meta?.title}</span>
      </>
    )
  }

  return {
    renderMenuTitle
  }
}
