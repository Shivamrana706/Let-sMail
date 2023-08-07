import API_GMAIL from "../sevices/api";
import { useState } from "react"


const useApi = (urlObject) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, SetIsLoading] = useState(false);

    const call = async (payload, type = "") => {
        setResponse([]);
        setError('');
        SetIsLoading(true);
        try {
            let res = await API_GMAIL(urlObject, payload, type);
            // console.log(res.data, 'res.data')
            {
                res.data ? setResponse(res.data) : setResponse([])
            }
            // setResponse(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            SetIsLoading(false);
        }
    }
    return { response, error, isLoading, call }
}

export default useApi;