import { authAPI } from '..'
import { publicAPI } from '..';

export class UserApi {
    static async login(email: string, password: string) {
        try {
            const url = '/user/login'
            const body = { email, password }
            const { data } = await publicAPI.post(url, body);
            return data
        } catch (e) {
            return e
        }
    }

    static async registration(email: string, password: string) {
        try {
            const url = '/user/registration'
            const body = { email, password }
            const { data } = await publicAPI.post(url, body);
            return data
        } catch (e) {
            return e
        }
    }

    static async sendEmail(email: string) {
        try {
            const url = '/code'
            const body = { email }
            const { data } = await publicAPI.post(url, body);
            return data
        } catch (e) {
            return e
        }
    }

    static async sendCode(email: string, password: string, code: number) {
        try {
            const url = '/code'
            const body = { email, password, code }
            const { data } = await publicAPI.put(url, body);
            return data
        } catch (e) {
            return e
        }

    }

    static async user() {
        try {
            const url = '/user/profile'
            const { data } = await authAPI.get(url);
            return data
        } catch (e) {
            return e
        }
    }

}