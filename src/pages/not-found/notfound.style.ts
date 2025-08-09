import {createUseStyles} from 'react-jss';
import {rem} from '../../assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';

const styles = {
    notfound: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        '& $img': {
            height: 'calc(100vh)',
            width: '70%',
            objectFit: 'cover',
        },
    },
    notfoundWrapper:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        paddingLeft: '5%',
        '& $h1':{
            fontSize: rem(180),
            fontFamily:fonts.fontBold,
            fontWeight: 600,
            marginBottom: rem(5),
        },
        '& $h2':{
            fontSize: rem(26),
            fontFamily:fonts.fontMedium,
            fontWeight: 500,
            marginBottom: rem(10),
        },
        '& $p':{
            fontSize: rem(24),
            fontFamily:fonts.font,
            fontWeight: 400,
        }
    }
};


export const useNotfoundStyles = createUseStyles(styles);
