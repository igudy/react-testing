import { getAllByRole, render, screen } from '@testing-library/react'
import ProductList from '../../src/components/ProductList'
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';

describe('ProductList', () => {
    it('should render the list of products', () => {
        render(<ProductList />); 

        const listItem = screen.findAllByRole('listItem');
        expect(listItem.length).toBeGreaterThan(0)
    })
    it("should render no products available if no product is found", async () => {
        server.use(http.get('/products', () => HttpResponse.json([])));

        render(<ProductList />);
        const message = await screen.findByText(/no products/i);
        expect(message).toBeInTheDocument();
    })
})