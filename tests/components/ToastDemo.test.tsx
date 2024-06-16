import { render, screen } from '@testing-library/react'
import ToastDemo from '../../src/components/ToastDemo'
import { Toaster } from 'react-hot-toast'
import userEvent from '@testing-library/user-event'
 
describe("ToastDemo", () => {
    it("should show the button",async () => {
        render(
          <>
                <ToastDemo />
                <Toaster />
          </>
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        // Ensuring that the button is clicked
        const user = userEvent.setup();
        await user.click(button)

        const showButton = screen.findByText(/success/i)
        expect(showButton).toBeInTheDocument();

    })
})