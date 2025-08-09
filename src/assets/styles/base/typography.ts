import poppinsBold from '../../fonts/Roboto/Roboto-Bold.ttf';
import poppinsThin from '../../fonts/Roboto/Roboto-Thin.ttf';
import poppinsLight from '../../fonts/Roboto/Roboto-Light.ttf';
import poppinsRegular from '../../fonts/Roboto/Roboto-Regular.ttf';
import poppinsBlack from '../../fonts/Roboto/Roboto-Black.ttf';
import poppinsMedium from '../../fonts/Roboto/Roboto-Medium.ttf';

import robotoBold from '../../fonts/Roboto/Roboto-Bold.ttf';
import robotoLight from '../../fonts/Roboto/Roboto-Light.ttf';
import robotoMedium from '../../fonts/Roboto/Roboto-Medium.ttf';
import robotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf';

import latoBold from '../../fonts/Lato/Lato-Bold.ttf';
import latoThin from '../../fonts/Lato/Lato-Thin.ttf';
import latoLight from '../../fonts/Lato/Lato-Light.ttf';
import latoRegular from '../../fonts/Lato/Lato-Regular.ttf';
import latoBlack from '../../fonts/Lato/Lato-Black.ttf';
import latoMedium from '../../fonts/Roboto/Roboto-Medium.ttf';

const typography = {
    '@font-face': [
        {
            fontFamily: 'Lato Bold',
            src: `url("${latoBold}")`,
        },
        {
            fontFamily: 'Lato Light',
            src: `url("${latoLight}")`,
        },
        {
            fontFamily: 'Roboto Medium',
            src: `url("${latoMedium}")`,
        },
        {
            fontFamily: 'Lato Regular',
            src: `url("${latoRegular}")`,
        },
        {
            fontFamily: 'Lato Black',
            src: `url("${latoBlack}")`,
        },
        {
            fontFamily: 'Lato Thin',
            src: `url("${latoThin}")`,
        },
        {
            fontFamily: 'Lato Bold',
            src: `url("${robotoBold}")`,
        },
        {
            fontFamily: 'Lato Light',
            src: `url("${robotoLight}")`,
        },
        {
            fontFamily: 'Lato Medium',
            src: `url("${robotoMedium}")`,
        },
        {
            fontFamily: 'Lato Regular',
            src: `url("${robotoRegular}")`,
        },
    ],
};

export default typography;
