import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebouneValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouneValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounceValue;
}

export default useDebounce;
