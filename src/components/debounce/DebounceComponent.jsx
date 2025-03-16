import { useState } from "react"
import useDebounce from "./use-debounce"

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    useDebounce(
        () => alert(count),
        1000,
        [count]
    )

    return <div>
        <h3>DebounceComponent <span style={{ color: 'yellow' }}>{count}</span></h3>
        <br />
        <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>

    </div>
}