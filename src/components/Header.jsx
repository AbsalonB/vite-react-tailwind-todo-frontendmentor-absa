import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from './icons/SunIcon';
const initialStateDarkMode = localStorage.theme === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    const refHeader = useRef(null);
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            refHeader.current.classList.add("text-gray");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            refHeader.current.classList.remove("text-gray");
            localStorage.theme = "light";
        }
    },[darkMode])
    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>    
                <button onClick={()=>setDarkMode(!darkMode)}>
                    {
                        darkMode?<SunIcon/>:<MoonIcon />
                    }
                    </button>
            </div>      
        </header>
    )
}

export default Header;