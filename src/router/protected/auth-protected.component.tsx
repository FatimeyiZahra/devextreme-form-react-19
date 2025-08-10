import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Routes} from '../routes';
import {IAuthProtectedRouteProps} from './auth-protected';
import {getToken} from '../../core/helpers/get-token';
import {useEffect} from 'react';
// import { setUser } from 'store/reducers/mainApp.reducer';

const AuthProtectedComponent = ({children, layout = 'public'}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getToken();
        if (token) {
            // dispatch(setUser(token.replace('Bearer ', '')));
        }
    }, []);
    const {pathname} = useLocation();
    useEffect(() => {
        document.body.scrollTo(0, 0);
        window.scrollTo(0, 0);
        document.body.scrollIntoView();
    }, [pathname]);

    switch (layout) {
        case 'auth':
            return getToken() ? <Navigate to={Routes.user} replace/> : children;
        case 'public':
            return getToken() ? children : <Navigate to={Routes.user} replace/>;
  
        default:
            return children;
    }
};

export default AuthProtectedComponent;
