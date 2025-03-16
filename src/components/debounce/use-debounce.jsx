import { useEffect } from "react"
import useTimeout from "../timeout/use-timeout"

export default function useDebounce(cb, delay, dependencies) {
    const { reset, clear } = useTimeout(cb, delay)
    console.log('use-debounce.jsx')

    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}