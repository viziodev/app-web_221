import { User } from "../interfaces/user";

export class Auth {
    private static  _user: User | null=null;

     static get user(): User {
        return this._user!;
    }
     static set user(value: User) {
            this._user = value;
    }
}
