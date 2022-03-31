/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-28 16:24:33
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-28 17:27:10
 */
type OnlyOnechildType = CustomRouteRecordRaw & { noShowChildren?: boolean }

interface HasOneShowingChild {
  oneShowingChild?: boolean
  onlyOneChild?: OnlyOnechildType
}

export const handleChildren = (
  children: CustomRouteRecordRaw[] = [],
  parent: CustomRouteRecordRaw
): HasOneShowingChild => {
  const onlyOneChild = ref<OnlyOnechildType>()

  // to filter children
  const showingChildren = children.filter((c) => {
    const meta = (c.meta ?? {}) as RouteMeta
    if (meta.hidden) {
      return false
    } else {
      onlyOneChild.value = c
      return true
    }
  })

  // only has one child
  if (showingChildren.length == 1) {
    return {
      oneShowingChild: false,
      onlyOneChild: unref(onlyOneChild)
    }
  }

  // only one root
  if (!showingChildren.length) {
    onlyOneChild.value = { ...parent, path: '', noShowChildren: true }
    return {
      oneShowingChild: true,
      onlyOneChild: unref(onlyOneChild)
    }
  }

  return {
    oneShowingChild: false,
    onlyOneChild: unref(onlyOneChild)
  }
}
