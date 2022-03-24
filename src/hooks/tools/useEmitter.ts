/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-24 10:32:43
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-24 10:34:16
 */
import mitt from 'mitt'

const emitter = mitt()

export const useEmitter = () => {
  return emitter
}
