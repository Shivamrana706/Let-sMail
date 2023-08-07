import axios from 'axios';


const API_GMAIL = async (urlObject, payload, type) => {
    const URl = ''
    return await axios({

        method: urlObject.method,
        url: `${URl}/${urlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;