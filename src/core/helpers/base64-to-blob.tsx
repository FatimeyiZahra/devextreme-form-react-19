export const base64ToBlobUrl = (base64: string, type = 'image/jpeg') => {
    const binStr = atob(base64);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }
    //turn blob to url
    const blob = new Blob([arr], { type });
    return URL.createObjectURL(blob);
};

// Convert Base64 string to a Blob object

