/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-03-20 08:53:25
 * @LastEditors: YDKD
 * @LastEditTime: 2022-03-20 08:55:29
 */
declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
