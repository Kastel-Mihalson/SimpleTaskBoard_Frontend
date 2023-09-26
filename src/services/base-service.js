export default class BaseService {

    _apiBase = process.env.REACT_APP_SWAPI_SERVICE;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch: ${url}. Received: ${res.status}`);
        }
        return await res.json();
    }
}