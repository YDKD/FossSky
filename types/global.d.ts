/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:53:25
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-11 10:12:23
 */
declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type Recordable<T = any> = Record<string, T>

declare interface MapStringKey {
  [key: string]: any
}
