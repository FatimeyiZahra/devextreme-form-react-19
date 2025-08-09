import React, { useState, useEffect } from 'react';

export function useViewportHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateHeight = () => setHeight(window.innerHeight);
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return height;
}

