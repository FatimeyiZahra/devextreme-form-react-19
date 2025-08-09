import axios, {AxiosResponse} from 'axios';
import {environment} from './app.config';
import {getBaseUrl, getToken} from '../helpers/get-token';
import {} from './axios.config';
import {getAuthorizationHeader} from './axios-msg.config';
import {errorToast} from '../shared/toast/toast';
import {store} from '../../store/store.config';
import {setLoader} from '../../store/store.reducer';

const baseURL = getBaseUrl() ?? environment.apiMain;
const axiosSilentInstance = axios.create({
    baseURL: baseURL,
    ...() => {
        return getToken() ? {'Authorization': `Bearer ${getToken()}`} : {};
    },
});
axiosSilentInstance.interceptors.request.use(
    (config: any) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: getAuthorizationHeader()
            }
        };
    }, (error) => {
        return Promise.reject(error);
    });

axiosSilentInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        const {
            response: {status},
        } = error;
        if (status ===401) {
            localStorage.removeItem(`${environment.applicationName}-token`);
            window.location.href = '/';
        }
        store.dispatch(setLoader(false));
        return Promise.reject(error);
    }
);
export default axiosSilentInstance;
