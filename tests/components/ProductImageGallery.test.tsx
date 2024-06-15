import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const result = render(<ProductImageGallery imageUrls={[]} />)

        // Destructure result to check if there's anything in the DOM
        const { container } = result;
        console.log("container==>", container);
        console.log("result==>", result);
        expect(container).toBeEmptyDOMElement();
    })

    it('should render a list of images', () => {
        const imageUrls = ['url1', 'url2']

        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
    })
})