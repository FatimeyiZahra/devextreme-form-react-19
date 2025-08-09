import fonts from '../abstracts/fonts';
import colors from '../abstracts/color';
import sizes from '../abstracts/sizes';
import {rem} from '../abstracts/functions';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            fontFamily: fonts.fontMain,
            margin: 0,
            backgroundColor: colors.white,
        },
        a: {textDecoration: 'none',},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        '::-webkit-scrollbar': {width: 8, height: 7,},
        '::-webkit-scrollbar-track': {boxShadow: `inset 0 0 2px #E8E8E8`, borderRadius:22, background: colors.scrollGray},
        '::-webkit-scrollbar-thumb': {background: '#7A7A7A', borderRadius:22},
        '& .ant-popover':{
            borderRadius: rem(6),
            background: colors.darkBlue
        }
    },
};

export default commonStyles;
