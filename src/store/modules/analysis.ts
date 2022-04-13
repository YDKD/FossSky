/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-11 16:54:55
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-12 08:59:27
 */
import { defineStore } from 'pinia'
export const useAnalysisStore = defineStore({
  id: 'analysis',
  state: () => ({
    totalLeaving: 0,
    currentDayColockPeople: 0,
    totalSystemDevelopers: 0,
    totalWorkers: 0
  }),
  getters: {
    getTotalLeaving(): number {
      return this.totalLeaving
    },
    getCurrentDayColockPeople(): number {
      return this.currentDayColockPeople
    },
    getTotalSystemDevelopers(): number {
      return this.totalSystemDevelopers
    },
    getTotalWorkers(): number {
      return this.totalWorkers
    }
  },
  actions: {
    setTotalLeaving(state: number) {
      this.totalLeaving = state
    },
    setCurrentDayColockPeople(state: number) {
      this.currentDayColockPeople = state
    },
    setTotalSystemDevelopers(state: number) {
      this.totalSystemDevelopers = state
    },
    setTotalWorkers(state: number) {
      this.totalWorkers = state
    }
  }
})

export const useAnalysisStoreWithOut = () => {
  return useAnalysisStore
}
