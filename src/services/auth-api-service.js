import BaseService from "./base-service";

export default class AuthApiService extends BaseService {

    getAllUsers() {
        return this.getResource('/get-all-users');
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }
}