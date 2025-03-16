import useToggle from "./use-toggle"

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)
    return <div>
        <h3>ToggleComponent <span style={{color: 'yellow'}}>{value.toString()}</span></h3>
        <br />
        <button onClick={toggleValue}>Toggle</button>
        <br />
        <button onClick={() => toggleValue(true)}>Set True</button>
        <br />
        <button onClick={() => toggleValue(false)}>Set False</button>
    </div>
}