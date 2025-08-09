import axios, {AxiosResponse} from 'axios';
import {environment} from './app.config';
import {store} from 'store/store.config';
import {setLoader} from 'store/store.reducer';
import {errorToast, successToast} from '../shared/toast/toast';
import {getBaseUrl, getToken} from '../helpers/get-token';
import {checkMessage} from '../helpers/debounce';

export const getAuthorizationHeader = () => getToken() ? `${getToken()}` : 'Bearer';

const baseURL = getBaseUrl() ?? environment.apiMain;
const axiosMsgInstance = axios.create({
        baseURL: baseURL,
    ...() => {
        return getToken() ? {'Authorization': `Bearer ${getToken()}`} : {};
    },
    })
;
axiosMsgInstance.interceptors.request.use(
    (config: any) => {
        store.dispatch(setLoader(true));
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: getAuthorizationHeader(),
                'content-language': 'az'
            }
        };
    }, (error) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosMsgInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const method = response?.config?.method?.toUpperCase() ?? '';

        let message = '';
        switch (method) {
            case 'POST':
                message = 'Uğurlu Əməliyyat';
                break;
            case 'PUT':
                message = 'Uğurlu Əməliyyat';
                break;
            case 'DELETE':
                message = 'Uğurla silindi';
                break;
        }
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            successToast(message);
        }
        if (response.status === 204 || response.status === 200) {
            store.dispatch(setLoader(false));
        }

        if (response.data) {
            store.dispatch(setLoader(false));
        }
        return response;
    },
    (error) => {
        let errMessage: string;
        const {
            response: {status},
        } = error;


        switch (status) {
            case 401:
                errMessage = '';
                localStorage.removeItem(`${environment.applicationName}-token`);
                window.location.href = '/';
                break;
            default:
                errMessage = checkMessage(error.response?.data);
        }
        errorToast(checkMessage(error.response?.data));
        store.dispatch(setLoader(false));
        return Promise.reject(error);
    }
);
export default axiosMsgInstance;
