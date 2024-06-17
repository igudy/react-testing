import "@testing-library/jest-dom/vitest";
import ResizeObserver from "resize-observer-polyfill";
import { server } from './mocks/server';


// beforeAll - Before each test, do this(listen to the request);
// afterEach - After each test reset the handlers
// afterAll - After all the tests have been executed, do this
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())


import { addListener } from "process";
import { before } from "node:test";

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