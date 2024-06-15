import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
    it('should render with correct text and intial state', () => {
        render(<TermsAndConditions />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Terms & Conditions")
    
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // const button = screen.getByRole('button', { name: /submit/i })
        // expect(button).toBeInTheDocument();
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled()
    })

    it('should check if the button is enabled', async () => {
        render(<TermsAndConditions />);
        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();

        await user.click(checkbox)

        expect(screen.getByRole('button')).toBeEnabled();

    })
})  