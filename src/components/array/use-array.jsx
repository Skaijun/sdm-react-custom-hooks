import { useState } from "react";


export default function useArray(defaultArray) {
    const [array, setArray] = useState(defaultArray)

    const push = (newEl) => {
        setArray(currArray => [...currArray, newEl])
    }

    const filter = (cb) => {
        setArray(currArray => {
            const updatedArray = [...currArray]
            return updatedArray.filter(cb)
        })
    }

    const update = (i, newEl) => {
        setArray(currArray => {
            const updatedArray = [...currArray]
            updatedArray[i] = newEl
            return updatedArray
        })
    }

    const remove = (i) => {
        setArray(currArray => [...currArray.slice(0, i), ...currArray.slice(i + 1, currArray.length)])
    }

    const clear = () => {
        setArray([])
    }

    return { array, set: setArray, push, remove, filter, update, clear };
}