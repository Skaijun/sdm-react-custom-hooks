import { useState } from "react"

export default function useToggle(defaultState) {
    const [value, setValue] = useState(defaultState)

    const toggleValue = (val) => {
        setValue(currentValue => typeof val === 'boolean' ? val : !currentValue)
    }

    return [value, toggleValue]
}