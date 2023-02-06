import { defineStore } from 'pinia'
export const userStore = defineStore('user', {
    state: () => {
        return {
            count: 7,
        }
    },
    getters: {
        getTestNum: (state) => {
            return  state.count
        },

    },
    actions: {

    }
})
