export const ArrowLeft = ({classes = ''}: { classes?: string }) => {
    return (
        <svg className={classes} width='50' height='50' viewBox='0 0 50 50' fill='none'
             xmlns='http://www.w3.org/2000/svg'>
            <path d='M31.25 39.5833L18.75 25L31.25 10.4166' stroke='white' strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};

export const ArrowLeftBlack = ({classes = ''}: { classes?: string }) => {
    return (
        <svg className={classes} xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19'
             fill='none'>
            <path d='M6.75 4.25L11.25 9.5L6.75 14.75' stroke='#121212' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};


export const ArrowRight = ({classes = ''}: { classes?: string }) => {
    return (
        <svg className={classes} width='50' height='50' viewBox='0 0 50 50' fill='none'
             xmlns='http://www.w3.org/2000/svg'>
            <g id='Linear / Arrows / Alt Arrow Down'>
                <path id='Vector' d='M18.75 10.4166L31.25 25L18.75 39.5833' stroke='white' strokeWidth='2'
                      strokeLinecap='round' strokeLinejoin='round'/>
            </g>
        </svg>
    );
};

export const ArrowSelect = ({classes = '', click, style}: { classes?: string, click?:any, style?:any }) => {
    return (
        <svg style={style} onClick={(event) => click(event)} className={classes} xmlns='http://www.w3.org/2000/svg' width='13' height='7' viewBox='0 0 13 7'
             fill='none'>
            <path d='M11.5 1.25L6.25 5.75L1 1.25' stroke='#898989' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round'/>
        </svg>
    );
};

export const ArrowBreadcrumbs = ({classes = ''}: { classes?: string }) => {
    return (
        <svg className={classes} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z'
                  fill='#1C274C'/>
        </svg>
    );
};
