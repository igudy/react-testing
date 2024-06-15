import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('user account test', () => {
    it("should render the name as text", () => {
        const userDetails: User = {id: 1, name:"igudy"}
        render(<UserAccount user={userDetails} />)
        

        const text=userDetails.name
        const nameText = screen.getByText(text);
        expect(nameText).toBeInTheDocument()
    })

    it("should render edit button if admin is true", () => {
        const userDetails: User = { id: 2, name: "igudy", isAdmin: true }
        render(<UserAccount user={userDetails} />);
        
        const button = screen.queryByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })

    it("should not render edit button if admin is false", () => {
        const userDetails: User = { id: 2, name: "igudy", isAdmin: false }
        render(<UserAccount user={userDetails} />);
        
        const button = screen.queryByRole("button")
        expect(button).not.toBeInTheDocument()
    })
})