import { useRouteError } from "react-router-dom"
export default function Error() {
    const error = useRouteError()
    return (
        <div>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </div>

    )


}