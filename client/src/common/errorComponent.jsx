
import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error, "error Router")
    return (
        <p>Error While loading component</p>
    )
}

export default ErrorComponent