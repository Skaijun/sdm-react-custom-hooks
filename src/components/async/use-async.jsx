import { useCallback, useEffect, useState } from "react";

export default function useAsync(cb, dependencies) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemorized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        cb()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies);

    useEffect(() => {
        callbackMemorized();
    }, [callbackMemorized]);
    return { loading, error, value };
}