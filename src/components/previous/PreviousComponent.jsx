import { useState } from "react"
import usePrevious from "./use-previous"

export default function PreviousComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('John')
    const prevValue = usePrevious(count)

    return <div>
        <h3>PreviousComponent <span style={{ color: 'yellow' }}>{count}{'; prev: '}{prevValue}</span></h3>
        <h4>Name: {name}</h4>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <button onClick={() => setName('Peter')}>Change Name</button>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    </div>
}