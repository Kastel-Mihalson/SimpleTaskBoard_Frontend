import axios from "axios";

export default class BaseService {

    _apiBase = process.env.REACT_APP_AUTH_API_SERVICE;

    async sendAsync( url, data ) {
        const fullUrl = `${ this._apiBase }${ url }`
        const axiosHeaders = {
            headers: { 'Content-Type': 'application/json' }
        }
        return await axios.post(
            fullUrl, data, axiosHeaders
        );
    }

    async getAsync( url, data ) {
        return await axios.get( url );
    }
}