/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-23 16:46:13
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-07 15:43:59
 */
import variables from '@/styles/variables.module.less'

type Type = 'prefix' | 'variables'

export const useDesign = (type: Type = 'prefix', componentScope?: string) => {
  const lessVariables = variables

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    return `${lessVariables.namespace}-${scope}`
  }
  if (type == 'prefix') {
    return getPrefixCls(componentScope!)
  } else {
    return variables
  }
}
