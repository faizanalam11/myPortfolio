import React from "react";
import myImage from "../assets/images/fizzyPic.png";
import { linkedIn } from "../utils/constants";
import { Resume } from "../utils/constants";
import { LiaLinkSolid } from "react-icons/lia";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ['MERN Developer.', 'Web Developer.', 'Programmer.', 'Problem Solver.'],
        loop: true,
        typeSpeed: 180,
        deleteSpeed: 50,
        delaySpeed: 2000,
      })
    return (
    <section id="home" className="flex text-[#ECEEEF] bg-[rgb(31,31,31)] px-2 py-1 m-1 justify-center items-center h-screen dark:bg-[#DDDDDD] duration-300 dark:text-[rgb(31,31,31)]">
        <div className="flex flex-col sm:flex-row sm:justify-around w-5/6 justify-center m-auto font-poppins">
            <div className="flex flex-col gap-5 sm:w-2/3 w-full order-2 sm:order-2 justify-center m-auto sm:m-0">
                <p className="font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:text-left">I AM FAIZAN ALAM</p>
                <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center sm:text-left"> <span className="">a</span> {" "}
                    <span className="text-[#91E0EE] dark:text-[#087E96]">{text}</span>
                    <Cursor
                        cursorBlinking = "false"
                        cursorStyle = "|"
                        cursorColor="#91E0EE"
                    />
                </h1>
                <div className="flex flex-row gap-4 mt-2 items-center m-auto sm:m-0 mb-1">
                    <a href={linkedIn} target="_blank">
                        <button className="border border-1 border-zinc-50 dark:text-[#ECEEEF] dark:bg-[#087E96] text-white p-[0.35rem] rounded-3xl font-semibold hover:bg-opacity-40 capitalize hover:bg-slate-500">Contact Me</button>
                    </a>
                    <a href={Resume} target="_blank">
                        <button className="dark:text-[#ECEEEF] dark:bg-[#087E96] text-white rounded-3xl font-semibold hover:bg-opacity-40 flex items-center justify-center gap-2 capitalize border border-1 border-white p-[0.35rem] hover:bg-slate-500"><span>Resume</span><span className="mt-1"><LiaLinkSolid/></span></button>
                    </a>
                </div>
            </div>
            <div className="sm:w-1/3 w-full flex justify-center items-center order-1 sm:order-2 m-auto p-1">
                <img src={myImage} alt="developersImage" className="w-9/12 rounded-full"/>
            </div>
        </div>
    </section>
    );
}
 
export default Home;