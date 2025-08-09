import axios, {AxiosResponse} from 'axios';
import {environment} from './app.config';
import {getBaseUrl, getToken} from '../helpers/get-token';
import {store} from '../../store/store.config';
import {setLoader} from '../../store/store.reducer';
import {getAuthorizationHeader} from './axios-msg.config';
import {errorToast} from '../shared/toast/toast';
import {checkMessage} from '../helpers/debounce';
const baseURL = getBaseUrl() ?? environment.apiMain;
const axiosInstance = axios.create({
    baseURL: baseURL,
    ...() => {
        return getToken() ? {'Authorization': `Bearer ${getToken()}`} : {};
    },
});
axiosInstance.interceptors.request.use(
    (config: any) => {
        store.dispatch(setLoader(true));
        // return config;
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: getAuthorizationHeader()
            }
        };
    }, (error) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        store.dispatch(setLoader(false));

        return response;

    },
    (error) => {
        const status = error.response?.status;
        if (!status) {
            localStorage.removeItem(`${environment.applicationName}-token`);
             window.location.href = '/';
        }

        errorToast(checkMessage(error.response?.data));
        store.dispatch(setLoader(false));
        return Promise.reject(error);
    }
);
export default axiosInstance;

