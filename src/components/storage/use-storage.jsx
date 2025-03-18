'use client';

import { useCallback, useEffect, useState } from "react";

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage);
}

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage);
}


function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState(() => {
        const jsonVal = storageObject.getItem(key);
        if (jsonVal) return JSON.parse(jsonVal);
        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    })

    useEffect(() => {
        if (value === undefined) {
            return storageObject.removeItem(key);
        }

        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined);
    }, [])

    return [value, setValue, remove];
}