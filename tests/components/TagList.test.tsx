import { render, screen, waitFor } from '@testing-library/react'
import TagList from '../../src/components/TagList'

describe('TagList component', () => {
    it('should render tags', async () => {
        render(<TagList />)

        await waitFor(() => {
            const listItems = screen.getAllByRole('listItem');
            expect(listItems.length).toBeGreaterThan(0)
        })

        const listItems = await screen.findAllByRole('listItem');
        expect(listItems.length).toBeGreaterThan(0);
    })
})