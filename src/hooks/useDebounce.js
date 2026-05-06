import { useRef } from "react";

export function useDebounce(fn, delay = 400) {
    const timerRef = useRef(null);

    return (...args) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}