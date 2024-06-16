import { render, screen } from '@testing-library/react'
import SearchBox from '../../src/components/SearchBox'
import userEvent from '@testing-library/user-event';


describe("searchbox", () => {
    const renderSearchBox = () => {
        const onChange = vi.fn()
        render(<SearchBox onChange={onChange} />);
        return {
            input: screen.getByPlaceholderText(/search/i),
            user: userEvent.setup(),
            onChange
        };
    };
    
    it("should render an input field for searching", () => {
        const { input } = renderSearchBox();
        expect(input).toBeInTheDocument();
    })

    it("should call onChange when Enter is pressed", async () => {
        const { input, onChange } = renderSearchBox();

        const user = userEvent.setup();
        const searchTerm = 'SearchTerm';
        await user.type(input, searchTerm + '{enter}');
        expect(onChange).toHaveBeenCalledWith(searchTerm);
        expect(input).toBeInTheDocument();
    }) 

    it("should not call onChange if input field is empty", async () => {
        const { input, onChange } = renderSearchBox();

        const user = userEvent.setup();
        await user.type(input, "{enter}");

        expect(onChange).not.toHaveBeenCalled();
    }) 
 

})