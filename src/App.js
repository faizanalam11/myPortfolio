import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { useState, useEffect } from "react";

const AppLayout = () => {
    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add("dark");
        } 
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return(
        <div className="bg-black dark:bg-white">
            <Header theme = {theme} setTheme = {setTheme}/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);