const actualResizeObserver = global.ResizeObserver;

export const observe = jest.fn();
export const unobserve = jest.fn();

class MockResizeObserver {
  observe(...args: unknown[]) {
    observe(args);
  }
  unobserve(...args: unknown[]) {
    unobserve(args);
  }
  disconnect() {
    // do nothing
  }

  constructor(public callback: (entries: ResizeObserverEntry[], observer: MockResizeObserver) => void) {}
}

global.ResizeObserver = MockResizeObserver;

export const reset = (): void => {
  global.ResizeObserver = actualResizeObserver;
};
