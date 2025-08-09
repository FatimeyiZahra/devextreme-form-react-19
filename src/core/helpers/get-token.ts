import {environment} from '../configs/app.config';

export const getToken = (): string | null => {
    return localStorage.getItem(`${environment.applicationName}-token`);
};

export const setToken = (token: string) => {
    localStorage.setItem(`${environment.applicationName}-token`, token);
};

export const removeToken = () => {
    localStorage.removeItem(`${environment.applicationName}-token`);
    localStorage.removeItem(`${environment.applicationName}-user`);
};

export const getBaseUrl = (): string | null => {
    return localStorage.getItem(`${environment.applicationName}-base-url`);
};

export const setUserData = (data: unknown) => {
    localStorage.setItem(`${environment.applicationName}-user`, JSON.stringify(data));
};

export const getUserData = (): string | null => {
    return localStorage.getItem(`${environment.applicationName}-user`);
};