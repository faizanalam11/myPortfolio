import React from "react";
import myImage from "../assets/images/fizzyPic.png";
import { linkedIn } from "../utils/constants";
import { Resume } from "../utils/constants";
import { LiaLinkSolid } from "react-icons/lia";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ['React.Js Developer.', 'Web Developer.', 'Programmer.', 'Problem Solver.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      })
    return (
    <section id="home" className="flex text-[#ECEEEF] bg-[rgb(31,31,31)] px-2 py-1 m-1 justify-center items-center min-h-60 dark:bg-[#DDDDDD] duration-300 dark:text-[rgb(31,31,31)]">
        <div className="flex flex-col sm:flex-row sm:justify-around w-5/6 justify-center">
            <div className="flex flex-col gap-3 sm:w-2/3 w-full order-2 sm:order-2 justify-center m-auto">
                <p className="font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center">I AM FAIZAN ALAM</p>
                <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center"> <span className="">a</span> {" "}
                    <span className="text-[#91E0EE] dark:text-[#087E96]">{text}</span>
                    <Cursor
                        cursorBlinking = "false"
                        cursorStyle = "|"
                        cursorColor="#91E0EE"
                    />
                </h1>
                <div className="flex flex-row gap-4 mt-2 items-center m-auto mb-1">
                    <a href={linkedIn} target="_blank">
                        <button className="border border-1 border-zinc-50 dark:text-[#ECEEEF] dark:bg-[#087E96] text-white p-[0.35rem] rounded-3xl font-semibold hover:bg-opacity-40 capitalize hover:bg-slate-500">Contact Me</button>
                    </a>
                    <a href={Resume} target="_blank">
                        <button className="dark:text-[#ECEEEF] dark:bg-[#087E96] text-white rounded-3xl font-semibold hover:bg-opacity-40 flex items-center justify-center gap-2 capitalize border border-1 border-white p-[0.35rem] hover:bg-slate-500"><span>Resume</span><span className="mt-1"><LiaLinkSolid/></span></button>
                    </a>
                </div>
            </div>
            <div className="w-1/3 flex justify-center items-center order-1 sm:order-2 m-auto p-1">
                <img src={myImage} alt="developersImage" className="xl:h-44 lg:h-40 md:h-36 sm:h-32 h-28 rounded-full"/>
            </div>
        </div>
    </section>
    );
}
 
export default Home;