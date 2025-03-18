import { useState } from "react";
import useFetch from "./use-fetch";


export default function FetchComponent() {
    const [id, setId] = useState(1)
    const options = {}
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        options,
        [id]
    )

    return (
        <div>
            <div>{id}</div>
            <button onClick={() => setId(c => c + 1)}>Increment ID</button>
            <div>{loading.toString()}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}