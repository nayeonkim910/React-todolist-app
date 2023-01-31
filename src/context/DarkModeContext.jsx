import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode=()=>{
        setDarkMode(prev=>!prev);
        applyDarkMode(!darkMode);
    };

    useEffect(()=>{
        const isDark = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDarkMode(isDark);
        applyDarkMode(isDark);
    },[]);

return (
        <DarkModeContext.Provider value={{darkMode, handleDarkMode}}>
        {children}
        </DarkModeContext.Provider>
    );
}
export const useDarkMode=()=>useContext(DarkModeContext);

function applyDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark')
        localStorage.theme ='dark';
    }
    else{
        document.documentElement.classList.remove('dark');
        localStorage.theme ='light';
        
    }
}