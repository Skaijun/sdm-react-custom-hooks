import useAsync from "./use-async"

export default function AsyncComponent() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.5;
            setTimeout(() => {
                success ? resolve("Hello, React Custom Hooks Resolved!") : reject("Error: 404");
            }, 1000);
        });
    }, []);

    return (
        <div>
            <div>Loading: {loading.toString()}</div>
            <div>{error}</div>
            <div>{value}</div>
        </div>
    )
}