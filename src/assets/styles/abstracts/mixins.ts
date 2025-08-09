const mixins = {
    breakpoint: (value: number) => `@media (max-width: ${value}px)`,
    transition: (property: string | null = 'all', duration: number | null = 0.3, timingFunction: string | null = 'ease') => `${property} ${duration}s ${timingFunction}`,
    animateOpacity: (start: number | null = 0, end: number | null = 1) => {
        return {
            from: {
                opacity: start
            },
            to: {
                opacity: end,
            }
        };
    }
};

export const {breakpoint, transition, animateOpacity} = mixins;

