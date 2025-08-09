import axios, {AxiosResponse} from 'axios';
import {environment} from './app.config';
import {getBaseUrl, getToken} from '../helpers/get-token';
import {} from './axios.config';
import {getAuthorizationHeader} from './axios-msg.config';
import {errorToast} from '../shared/toast/toast';
import {store} from '../../store/store.config';
import {setLoader} from '../../store/store.reducer';
import {checkMessage} from '../helpers/debounce';

const baseURL = getBaseUrl() ?? environment.apiMain;
const axiosSilentErrorInstance = axios.create({
    baseURL: baseURL,
    ...() => {
        return getToken() ? {'Authorization': `${getToken()}`} : {};
    },
});
axiosSilentErrorInstance.interceptors.request.use(
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

axiosSilentErrorInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        let errMessage: string;
        const {
            response: {status},
        } = error;

        errorToast(checkMessage(error.response?.data));

        store.dispatch(setLoader(false));
        return Promise.reject(error);
    }
);
export default axiosSilentErrorInstance;
