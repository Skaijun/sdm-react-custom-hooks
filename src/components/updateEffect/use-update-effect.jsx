import { useEffect, useRef } from "react"

export default function useUpdateEffect(cb, dependencies) {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            cb()
        }
    }, dependencies)
    
    return null;
}