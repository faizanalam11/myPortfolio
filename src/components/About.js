import { AiFillFire } from "react-icons/ai";

const About = () => {
    return(
        <section id="about" className="flex justify-center items-center flex-col bg-[rgb(31,31,31)] text-[#ECEEEF] p-2 m-1 min-h-60 dark:bg-[#DDDDDD] duration-300 font-poppins">
            <div>
                <p className="font-bold text-[#91E0EE] dark:text-[#087E96] text-xl font-titleFont">About Me</p>
            </div>
            <div className="w-5/6 flex flex-col mx-auto my-1 justify-center items-center">
                <div className="dark:text-black">
                    <p className="flex gap-1 items-center"><AiFillFire/>Hey, I'm Faizan, A Full Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js).</p><br/>
                    <p className="flex gap-1 items-center"><AiFillFire/>Creator of News Maniac – a dynamic, responsive news platform built with React and Tailwind CSS.</p><br/>
                    <p className="flex gap-1 items-center"><AiFillFire/>Skilled in solving real-world problems with clean, scalable solutions.</p><br/>
                    <p className="flex gap-1 items-center"><AiFillFire/>Proficient in collaborating with teams in fast-paced, agile environments.</p><br/>
                    <p className="flex gap-1 items-center"><AiFillFire/>Continuously learning and adapting to new technologies and frameworks.</p><br/>
                    <p className="flex gap-1 items-center"><AiFillFire/>I take an active interest in technology, sports and how their conflation impacts society.</p><br/>
                </div>
            </div>
        </section>
    );
}
 
export default About;