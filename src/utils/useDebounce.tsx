/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): T => {
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay],
  );

  return debouncedFunc as T;
};
