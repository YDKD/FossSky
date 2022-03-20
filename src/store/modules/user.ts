import { defineStore } from 'pinia'

interface UserInfo {
  name: string
}

export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    name: 'YDKD'
  })
})
