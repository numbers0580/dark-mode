import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [toggleDark, switchDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(toggleDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, []);

    return [toggleDark, switchDarkMode];
};

export default useDarkMode;