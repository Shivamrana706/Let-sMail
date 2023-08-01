import axios from 'axios';


const API_GMAIL = async (urlObject, payload) => {
    const URl = 'http://localhost:8000'
    await axios({
        method: urlObject.method,
        url: `${URl}/save`,
        data: payload
    })
}

export default API_GMAIL;