import {ReactElement} from 'react';

export interface IAuthProtectedRouteProps {
    dep?: any;
    children:ReactElement | ReactElement[] | any,
    layout: 'auth' | 'public' | 'admin' | 'simple';
}
