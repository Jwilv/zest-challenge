import { useEffect, useState } from "react";

/**
 * Debounces the value changes based on the specified delay.
 *
 * @param {string} value - the value to be debounced
 * @param {number} delay - the delay in milliseconds
 * @return {string} the debounced value
 */
export const useDebonce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncedValue
}