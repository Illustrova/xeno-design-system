import { renderHook } from '@testing-library/react';
import { MutableRefObject } from 'react';

import { unobserve, observe, reset } from './MockResizeObserver';
import { useResizeObserver } from './useResizeObserver';

describe('useResizeObserver', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    reset();
  });

  it('handles registering and unregistering of refs', () => {
    const { unmount } = renderHook(() =>
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      useResizeObserver({ current: {} as HTMLDivElement }, () => {
        return;
      })
    );

    expect(observe).toHaveBeenCalledTimes(1);
    expect(unobserve).toHaveBeenCalledTimes(0);

    unmount();

    expect(unobserve).toHaveBeenCalledTimes(1);
  });

  it('updates the callback if it changes', () => {
    const { rerender } = renderHook(
      (props: { ref: MutableRefObject<HTMLDivElement>; callback: (entry: ResizeObserverEntry) => void }) =>
        useResizeObserver(props.ref, props.callback),
      {
        initialProps: {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          ref: { current: {} as HTMLDivElement },
          callback() {
            return;
          },
        },
      }
    );

    expect(observe).toHaveBeenCalledTimes(1);
    expect(unobserve).toHaveBeenCalledTimes(0);

    rerender({
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      ref: { current: {} as HTMLDivElement },
      callback() {
        return;
      },
    });

    expect(observe).toHaveBeenCalledTimes(2);
    expect(unobserve).toHaveBeenCalledTimes(1);
  });
});
