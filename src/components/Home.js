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
    <section id="home" className="flex bg-[#252525] px-2 py-1 m-1 justify-around items-center min-h-60 dark:bg-[#DDDDDD] duration-300">
        <div className="flex flex-col gap-3 w-2/3">
            <p className="text-white text-2xl dark:text-black">I AM FAIZAN ALAM</p>
            <h1 className="text-white font-bold text-6xl"> <span className="dark:text-black">a</span> {" "}
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
        <div className="w-1/3">
            <img src={myImage} alt="developersImage" className="h-40"/>
        </div>
    </section>
    );
}
 
export default Home;