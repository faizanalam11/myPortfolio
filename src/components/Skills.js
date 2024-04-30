import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col justify-center bg-[#252525] m-1 p-2 min-h-60 gap-3 dark:bg-[#DDDDDD] duration-300">
            <div className="flex justify-center items-center">
                <p className="font-bold text-[#DC4F25] text-xl font-titleFont">Skills</p>
            </div>
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
        </section>
    );
}
 
export default Skills;