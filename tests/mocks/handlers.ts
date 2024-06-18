import { http, HttpResponse } from 'msw';
import { products } from '../data/data';

export const handlers = [
    // get categories endpoint
    http.get('/categories', () => {
        return HttpResponse.json([
            { id: 1, name: "Electronics" },
            { id: 2, name: "Beauty" },
            { id: 3, name: "Gardening"}
        ])
    }),

    // get all products endpoint
    http.get('/products', () => {
        return HttpResponse.json(products)
    }),

    // get product by id
    http.get('/products/:id', ({ params }) => {
        const id = parseInt(params.id as string);
        const product = products.find(p => p.id === id);
        if (!product) return new HttpResponse(null, { status: 400 });
        return HttpResponse.json(product);
    })
]