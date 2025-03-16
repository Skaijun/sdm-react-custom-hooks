import { useState } from "react"
import useUpdateEffect from "./use-update-effect"

export default function UpdateEffectComponent() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return <div>
        <h3>UpdateEffectComponent <span style={{ color: 'yellow' }}>{count}</span></h3>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
}