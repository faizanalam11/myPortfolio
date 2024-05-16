import React from "react";
import myImage from "../assets/images/fizzyPic.png";
import { linkedIn } from "../utils/constants";
import { Resume } from "../utils/constants";
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
    <section id="home" className="flex bg-[#252525] px-2 py-1 m-1 justify-center items-center min-h-60 dark:bg-[#DDDDDD] duration-300">
        <div className="flex justify-around w-5/6">
        <div className="flex flex-col gap-3 w-2/3">
            <p className="text-white font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base dark:text-black">I AM FAIZAN ALAM</p>
            <h1 className="text-white font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl"> <span className="dark:text-black">a</span> {" "}
                <span className="text-[#FF4004] ">{text}</span>
                <Cursor
                    cursorBlinking = "false"
                    cursorStyle = "|"
                    cursorColor="#FF4004"
                />
            </h1>
            <div className="flex flex-row gap-3 mt-2">
                <a href={linkedIn}>
                    <button className="bg-[#FF4004] p-1 rounded-md text-white font-semibold hover:bg-opacity-40">Contact Me</button>
                </a>
                <a href={Resume}>
                    <button className="bg-[#FF4004] p-1 rounded-md text-white font-semibold hover:bg-opacity-40">Resume</button>
                </a>
            </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
            <img src={myImage} alt="developersImage" className="xl:h-44 lg:h-40 md:h-36 sm:h-32 h-28"/>
        </div>
        </div>
    </section>
    );
}
 
export default Home;