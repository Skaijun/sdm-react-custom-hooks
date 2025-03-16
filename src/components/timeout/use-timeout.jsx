import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(cb, delay) {
    const callbackRef = useRef(cb)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = cb
    }, [cb])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    useEffect(
        () => {
            set()

            return clear
        },
        [
            delay, set, clear
        ]
    )


    return { clear, reset }
}