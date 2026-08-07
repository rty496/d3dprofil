export interface Product {
    id: string
    name: string
    price: number
    image: string
    description: string
    polyCount?: string
    format?: string[]
    modelUrl?: string
    color?: string
    attribution?: {
        text: string
        url: string
    }
}

export const products: Product[] = [
    {
        id: 'demo-character',
        name: 'Demo: Стилізований персонаж',
        price: 500,
        image: '/shop/demo-character.jpg',
        description: 'Приклад товарної картки для 3D-моделі персонажа. Замініть зображення та опис на власну роботу — структура даних лишається тою самою.',
        polyCount: '8 500 полігонів',
        format: ['FBX', 'OBJ', 'Blender'],
        color: '#e63946',
        modelUrl: '/models/character.glb',
        attribution: {
            text: 'Модель: Kenney.nl (CC0)',
            url: 'https://kenney.nl/assets/blocky-characters'
        }
    },
    {
        id: 'demo-location',
        name: 'Demo: Low-poly локація',
        price: 350,
        image: '/shop/demo-location.jpg',
        description: 'Приклад картки для ігрової локації. Підходить для демонстрації того, як виглядатиме товар типу "оточення" чи "сцена".',
        polyCount: '12 000 полігонів',
        format: ['FBX', 'GLTF'],
        color: '#2a9d8f',
        attribution: {
            text: 'Модель: Kenney.nl (CC0)',
            url: 'https://kenney.nl/assets/nature-kit'
        }
    },
    {
        id: 'demo-weapon',
        name: 'Demo: Зброя / пропс',
        price: 200,
        image: '/shop/demo-weapon.jpg',
        description: 'Приклад картки для дрібного пропса чи зброї. Гарно демонструє, як шаблон виглядає з компактними об\'єктами.',
        polyCount: '3 500 полігонів',
        format: ['FBX', 'OBJ'],
        color: '#6c757d',
        attribution: {
            text: 'Модель: Kenney.nl (CC0)',
            url: 'https://kenney.nl/assets/blaster-kit'
        }
    }
]