import "@testing-library/jest-dom/vitest";

import { addListener } from "process";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onChange: null,
        addListener: vi.fn(), //deprecated
        removeListener: vi.fn(), //deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    }))
})