/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 09:09:51
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 10:07:21
 */
import { useAppStoreWithOut } from '@/store/modules/app'
import { isString } from '@/utils/is'

const appStore = useAppStoreWithOut()

export const useTitle = (newTitle?: string) => {
  console.log(appStore.getWebSiteTitle)
  const title = ref(newTitle ?? appStore.getWebSiteTitle)

  watch(
    title,
    (n, o) => {
      if (isString(n) && n !== o && document) {
        document.title = n
      }
    },
    { immediate: true }
  )

  return title
}
