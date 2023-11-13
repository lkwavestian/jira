import { useEffect, useState } from 'react';

export const isFalsy = (value: any): boolean => (value === 0 ? true : Boolean(value));

export const cleanObject = (object: object) => {
    let res = { ...object };
    Object.keys(res).forEach((key: string) => {
        let value = (res as any)[key];
        if (isFalsy(value)) {
            delete (res as any)[key];
        }
    });
    return res;
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};

export const useDebounce = <V>(value: V, delay?: number): V => {
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
