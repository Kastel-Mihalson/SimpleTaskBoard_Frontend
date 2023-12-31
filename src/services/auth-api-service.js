import BaseService from "./base-service";

export default class AuthApiService extends BaseService {

    registerUser( data ) {
        return this.sendAsync( '/auth/register', data );
    }
}