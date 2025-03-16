import useArray from "./use-array"

const initArray = [1, 2, 3, 4, 5, 6, 7, 8]

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray(initArray)

    return <div>
        <h3>ArrayComponent <span style={{ color: 'yellow' }}>{array.join(', ')}</span></h3>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <button onClick={() => push(7)}>Add '7'</button>
            <button onClick={() => update(1, 9)}>Change second element to '9'</button>
            <button onClick={() => remove(1)}>Remove second element</button>
            <button onClick={() => filter(n => n < 3)}>Keep numbers less then '4'</button>
            <button onClick={() => set([1, 2])}>Set to '[1, 2]'</button>
            <button onClick={() => clear()}>Clear array</button>
        </div>
    </div>
}