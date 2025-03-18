import { useRef } from "react";


export default function usePrevious(value) {
    const currRef = useRef(value);
    const prevRef = useRef();
    if (currRef.current !== value) {
        prevRef.current = currRef.current;
        currRef.current = value;
    }

    return prevRef.current;
}