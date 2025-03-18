'use client';

import { useLocalStorage, useSessionStorage } from "./use-storage"

export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage('name', 'John');
    const [age, setAge, removeAge] = useLocalStorage('age', 42);

    return <div>
        <h3>StorageComponent <span style={{ color: 'yellow' }}>{name}{' -:- '}{age}</span></h3>
        <h4>Name: {name}</h4>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <button onClick={() => setName('Bob')}>Set Name</button>
            <button onClick={() => setAge(32)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    </div>
}