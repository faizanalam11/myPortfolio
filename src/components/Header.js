import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "../utils/constants";
import day from "../assets/images/day.png";
import night from "../assets/images/night.png";

const Header = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
    <div className="bg-[#252525] sticky top-0 border-b-2 z-50 border-black flex justify-between items-center mx-1 mb-1 p-2 font-titleFont dark:bg-[#DDDDDD] dark:border-[#E1F7F5] duration-300">
        <div className="text-yellow-800 p-1 my-1">
            <h1 className="font-bold text-[#E2482B] xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-serif">Faizan Alam</h1>
        </div>
        <div>
            <ul className="flex text-gray-400 gap-4">
                {
                    navLinks.map(({id, title, link}) => (
                        <li className="p-1 md:m-1 m-0 tracking-wide cursor-pointer text-lg hover:text-[#E2482B] duration-300 dark:text-black" key={id}>
                            <Link
                                activeClass="active"
                                to= {link}
                                spy = {true}
                                smooth = {true}
                                offset= {-70}
                                duration= {500}
                            >{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className={"bg-black w-10 rounded-full p-1 m-1 cursor-pointer dark:bg-white"} onClick={() => {toggle_mode()}}>
            <img src={theme == 'light' ? day : night} alt={theme == 'light' ? 'day' : 'night'}/>
        </div>
    </div>
    );
};
 
export default Header;