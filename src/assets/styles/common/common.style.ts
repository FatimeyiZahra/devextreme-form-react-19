import {createUseStyles} from 'react-jss';
import {rem} from '../abstracts/functions';
import colors from '../abstracts/color';
import fonts from '../abstracts/fonts';
import {transition} from '../abstracts/mixins';

const styles = {
    height: {
        height: '100%',
        overflow: 'auto',

    },
    editIcon: {
        cursor: 'pointer',
    },
    filter: {
        display: 'flex',
    },
    filterElementBtn: {
        height: `${rem(36)}!important`,
        padding: `${rem(0)}`,
        marginRight: `${rem(15)}`,
    },
    filterElementInput: {
        height: `${rem(36)}`,
        // marginBottom: `${rem(10)}`,
        // marginRight: `${rem(10)}`,
        '& .ant-form-item-control-input': {
            height: `${rem(31)}!important`,
        },
    },
    filterElementSelect: {
        width: `100%!important`,
        marginRight: `${rem(15)}`,
        // marginTop: `${rem(7)}`,
        '& .ant-select-selection-item': {
            lineHeight: `${rem(31)}!important`,
        },

        '& .ant-select-selector': {
            height: `${rem(36)}!important`,
            // marginBottom: `${rem(10)}`,
            marginTop: `${rem(7)}`,
        },
        '& $input': {
            height: `${rem(31)}!important`,
        },
        '& .ant-form-item-control-input': {
            height: `${rem(31)}!important`,
        },
        '& .ant-select-selection-placeholder': {
            lineHeight: `${rem(31)}!important`,
        },
        '& .ant-select-arrow': {
            marginTop: `${rem(-15)}!important`,
        },
    },
    clear: {
        fontSize: 13,
        padding: 10,
        position: 'relative',
        top: '50%',
        right: rem(-5),
        color: '#999',
    },
    label: {
        color: colors.gray,
        fontSize: rem(13)
    },
    formPosition: {
        marginTop: rem(37),
        paddingLeft: rem(30),
        paddingRight: rem(30),
        paddingBottom: rem(20),
    },
    tableHeight: {
        height: 'calc(100% - 190px)',
    },

    popover: {
        '& .ant-popover-inner': {
            borderRadius: rem(6),
            background: colors.bgBlue,
            padding: rem(4),
            color: `${colors.white}!important`,
        },
        '& .ant-popover-inner-content': {
            color: colors.white,
            fontFamily: fonts.font,
            fontSize: rem(14),
        },
        '& .ant-popover-arrow': {
            '&::before': {
                background: colors.bgBlue
            },
            '&::after': {
                background: colors.bgBlue
            }
        },

    },
    eye: {
        cursor: 'pointer',
        width: rem(18),
        height: rem(18),
        '&:hover': {
            color: colors.blue
        },
        position: 'absolute',
        right: rem(10),
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 223,
        backgroundColor: colors.white,
    },
    eyeActive: {
        transition: transition('opacity', 0.3),
        '&:before': {
            opacity: '1!important'
        },

    },
    eyeInput: {
        position: 'relative',
        width: '100%',
        '& input': {
            paddingRight: rem(30),
        },
        transition: transition('opacity', 0.3),
        '&:before': {
            content: '""',
            position: 'absolute',
            width: rem(1),
            height: rem(20),
            borderRadius: '50%',
            backgroundColor: colors.gray,
            top: '50%',
            right: rem(18),
            transform: 'translateY(-50%) rotate(60deg)',
            zIndex: 1000,
            opacity: 0,
        },
    },
    drp:{
        '& .ant-dropdown-menu-item':{
            padding: `0!important`,
        },
    }

};


export const useCommonStyles = createUseStyles(styles);
