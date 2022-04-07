/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-06 11:53:02
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-06 13:39:08
 */

import { createTypes, VueTypesInterface } from 'vue-types'

type PropTypes = VueTypesInterface

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined
}) as PropTypes

export { propTypes }
