import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col justify-center bg-[rgb(31,31,31)] m-1 p-2 min-h-60 gap-3 dark:bg-[#DDDDDD] duration-300">
            <div className="flex justify-center items-center">
                <p className="font-bold text-[#91E0EE] dark:text-[#087E96] text-xl font-titleFont">Skills</p>
            </div>
            <div className="w-5/6 m-auto flex">
            <div className="flex flex-wrap justify-evenly">
                <span className="skillsIcon"> 
                    <p>C++</p>
                </span>
                <span className="skillsIcon"> 
                    <FaHtml5/>
                </span>
                <span className="skillsIcon">
                    <SiTailwindcss/>
                </span>
                <span className="skillsIcon"> 
                    <SiJavascript/>
                </span>
                <span className="skillsIcon"> 
                    <FaReact/>
                </span>
                <span className="skillsIcon"> 
                    <FaNodeJs/>
                </span>
                <span className="skillsIcon">
                    <p>SQL</p>
                </span>
                <span className="skillsIcon">
                    <p>DSA</p>
                </span>
            </div>
            </div>
        </section>
    );
}
 
export default Skills;