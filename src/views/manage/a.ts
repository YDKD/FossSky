/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-30 16:10:15
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-30 16:10:15
 */
type formatObjType = {
  y: number
  m: number
  d: number
  h: number
  i: number
  s: number
  a: number
}
export function parseTime(
  time: number | string | Date,
  cFormat: string = '{y}-{m}-{d} {h}:{i}:{s}'
): null | string {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format: string = cFormat
  let date: Date

  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj: formatObjType = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str: string = format.replace(
    /{([ymdhisa])+}/g,
    (result, key: string): string => {
      const value: number = formatObj[key]
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value]
      }
      return value.toString().padStart(2, '0')
    }
  )
  return time_str
}
