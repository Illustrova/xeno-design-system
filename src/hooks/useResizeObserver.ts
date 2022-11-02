import { MutableRefObject, useEffect } from 'react';

const refCallbackPairs: { ref: MutableRefObject<unknown>; callback: (entry: ResizeObserverEntry) => void }[] = [];

const resizeObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const pair = refCallbackPairs.find(somePair => somePair.ref.current === entry.target);

    if (!pair) {
      return;
    }

    pair.callback(entry);
  });
});

export function useResizeObserver<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  callback: (entry: ResizeObserverEntry) => void
): void {
  useEffect(() => {
    const current = ref.current;
    if (!current) {
      return undefined;
    }

    const addedPair = { ref, callback };
    refCallbackPairs.push(addedPair);
    resizeObserver.observe(current);

    return () => {
      const foundIndex = refCallbackPairs.findIndex(pair => addedPair === pair);
      refCallbackPairs.splice(foundIndex, 1);
      resizeObserver.unobserve(current);
    };
  }, [callback, ref]);
}
