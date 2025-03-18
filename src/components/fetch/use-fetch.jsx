import useAsync from "../async/use-async";

const DEF_OPTIONS = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function useFetch(url, option = {}, dependencies = []) {
    return useAsync(() => {
        return fetch(url, { ...DEF_OPTIONS, ...option })
            .then(res => {
                if (res.ok) return res.json()

                return res.json().then(json => Promise.reject(json))

            })
    }, dependencies)
}