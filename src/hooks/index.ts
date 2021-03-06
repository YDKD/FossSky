/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:37:55
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-05 14:18:21
 */

import { useNProgress } from './web/useNProgress'
import { useTitle } from './web/useTitle'
import { useMessage, useTips } from './web/useMessage'
import { useDesign } from './web/useDesign'
import { useMessageBox } from './web/useMessageBox'

import { useCache } from './tools/useCache'
import { useEmitter } from './tools/useEmitter'
import { useClear } from './tools/useClear'

export {
  useNProgress,
  useTitle,
  useCache,
  useDesign,
  useMessage,
  useEmitter,
  useClear,
  useTips,
  useMessageBox
}
