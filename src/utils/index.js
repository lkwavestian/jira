import { useEffect, useState } from 'react';

export const isFalsy = (value) => (value === 0 ? true : Boolean(value));

export const cleanObject = (obj) => {
    let res = {};
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (isFalsy(value)) {
            res[key] = value;
        }
    });
    return res;
};

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, []);
};

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]);
    return debounceValue;
};
