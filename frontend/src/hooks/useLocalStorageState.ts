'use client';

import { useEffect, useRef, useState } from 'react';

type UseLocalStorageStateOptions<T> = {
  storageKey: string;
  initialValue: T;
  read?: (raw: string | null) => T;
  write?: (value: T) => string;
};

export function useLocalStorageState<T>({ storageKey, initialValue, read, write }: UseLocalStorageStateOptions<T>) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);
  const initialValueRef = useRef(initialValue);
  const readRef = useRef(read);
  const writeRef = useRef(write);

  initialValueRef.current = initialValue;
  readRef.current = read;
  writeRef.current = write;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      setValue(readRef.current ? readRef.current(raw) : raw ? JSON.parse(raw) as T : initialValueRef.current);
    } catch {
      setValue(initialValueRef.current);
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;

    try {
      window.localStorage.setItem(storageKey, writeRef.current ? writeRef.current(value) : JSON.stringify(value));
    } catch {
      // Ignore storage write failures in demo/local-only flows.
    }
  }, [hydrated, storageKey, value]);

  return { value, setValue, hydrated };
}
