import { defineStore } from 'pinia'

export interface CartItem {
    id: string
    name: string
    price: number
    image?: string
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[]
    }),

    getters: {
        total: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
        count: (state) => state.items.length
    },

    actions: {
        addItem(item: CartItem) {
            // не дублюємо однаковий товар
            if (!this.items.find(i => i.id === item.id)) {
                this.items.push(item)
            }
        },
        removeItem(id: string) {
            this.items = this.items.filter(i => i.id !== id)
        },
        clear() {
            this.items = []
        }
    }
})