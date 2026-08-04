export interface Product {
    id: string
    name: string
    price: number
    image: string
    description: string
    polyCount?: string
    format?: string[]
}

export const products: Product[] = [
    {
        id: 'model-1',
        name: 'Стилізований персонаж',
        price: 500,
        image: '/shop/model1.jpg',
        description: 'Низькополігональна модель персонажа у стилізованому вигляді. Готова до анімації, з чистою топологією та розгорнутою UV-картою.',
        polyCount: '8 500 полігонів',
        format: ['FBX', 'OBJ', 'Blender']
    },
    {
        id: 'model-2',
        name: 'Low-poly локація',
        price: 350,
        image: '/shop/model2.jpg',
        description: 'Компактна ігрова локація у low-poly стилі. Підходить для мобільних та інді-ігор, оптимізована під реальний час рендерингу.',
        polyCount: '12 000 полігонів',
        format: ['FBX', 'GLTF']
    },
    {
        id: 'model-3',
        name: 'Реалістична зброя',
        price: 200,
        image: '/shop/model3.jpg',
        description: 'Деталізована модель зброї з PBR-текстурами 4K. Підходить для AAA-проєктів та реалістичних сцен.',
        polyCount: '25 000 полігонів',
        format: ['FBX', 'OBJ']
    }
]