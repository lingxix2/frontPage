import axios from 'axios'

const Https = (url, method, params) => {
    const _params = (method.toLowerCase() === 'post') ? params : {params};
    return axios[method](url, _params)
        .then(res => res.data.data)
        .catch(error => alert(error))
}

export default Https;