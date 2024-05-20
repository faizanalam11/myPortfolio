import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Links = () => {
    return (
        <section id="contacts" className="flex flex-col justify-center bg-[rgb(31,31,31)] mx-1 mt-1 p-2 min-h-60 gap-3 dark:bg-[#DDDDDD] duration-300">
            <div className="flex justify-center items-center">
                <p className="font-bold text-[#91E0EE] dark:text-[#087E96] text-xl font-titleFont">Links</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <a href="https://www.instagram.com/_faizan.alam/?hl=en">
                    <span className="skillsIcon">
                        <BsInstagram/>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/faizanalam123/">
                    <span className="skillsIcon"> 
                        <BsLinkedin/>
                    </span>
                </a>
                <a href="https://github.com/faizanalam11">
                    <span className="skillsIcon"> 
                        <BsGithub/>
                    </span>
                </a>
                <a href="https://leetcode.com/u/faizanalam416/">
                    <span className="skillsIcon"> 
                        <SiLeetcode/>
                    </span>
                </a>
            </div>
        </section>
    );
}
 
export default Links;