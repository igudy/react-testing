import { it, expect, describe } from 'vitest';
import {faker} from '@faker-js/faker'

describe('group', () => {
    it('should call categories endpoint', async () => {
        const response = await fetch('/categories');
        const data = await response.json();
        console.log(data);
        expect(data).toHaveLength(3);
    })

    it("should test faker commerce", async () => {
        console.log({
            name: faker.commerce.productName(),
            price: faker.commerce.price({min: 1, max: 100})
        })
    });
})