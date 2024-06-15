import {render, screen} from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('Greet', ()=> {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="Igudy" />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })

    it('should render Hello with the name is provided', () => {
        render(<Greet name="Mosh" />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/mosh/i);
    })
})