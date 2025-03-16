import { useState } from "react"
import useTimeout from "./use-timeout"

export default function TimeoutComponent() {
    const [count, setCount] = useState(10)
    // useTimeout(() => setCount(0), 1000) // This will reset the count to 0 after 1 second
    const { clear, reset } = useTimeout(() => setCount(0), 1000)
    return <div>
        <h3>TimeoutComponent <span style={{ color: 'yellow' }}>{count}</span></h3>
        <br />
        <div>
            <button style={{ padding: '5px 15px', marginRight: '15px' }} onClick={() => setCount(currVal => currVal + 1)}>Increment</button>
            <button style={{ padding: '5px 15px', marginRight: '15px' }} onClick={clear}>Clear Timeout</button>
            <button style={{ padding: '5px 15px' }} onClick={reset}>Reset Timeout</button>
        </div>

    </div>
}