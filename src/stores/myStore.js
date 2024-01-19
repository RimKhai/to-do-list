import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => ({
        list: [
            {
                id: 1,
                title: 'Пососать хуй',
            },
            {
                id: 2,
                title: 'Пососать пизду',
            },
            {
                id: 3,
                title: 'Пососать жопу',
            },
        ],
    }),

    actions: {
        addDo(title) {
            this.list = [...this.list, {
                id: Date.now(),
                title: title
            }]
        }
    },
})
