const About = () => {
    return(
        <section id="about" className="flex justify-center items-center flex-col bg-[rgb(31,31,31)] text-[#ECEEEF] p-2 m-1 min-h-60 dark:bg-[#DDDDDD] duration-300">
            <div>
                <p className="font-bold text-[#91E0EE] dark:text-[#087E96] text-xl font-titleFont">About Me</p>
            </div>
            <div className="w-5/6 flex flex-col mx-auto my-1 justify-center items-center">
                <div className="dark:text-black">
                    <p>Hey, I'm Faizan, A student a programmer and a developer.</p><br/>
                    <p>I'm currently studying Computer Science at DR. B.C. Roy Engineering College.</p><br/>
                    <p>I take joy in solving complex problems with elegant solutions by simplifying and distilling core concepts.</p><br/>
                    <p>I'm proficient in Front-end development.</p><br/>
                    <p>I take an active interest in technology, sports and how their conflation impacts society.</p><br/>
                    <p>When I'm not working in front of screen, I enjoy cooking, reading, exercising and nature 🌳⛵⛰.</p><br/>
                </div>
            </div>
        </section>
    );
}
 
export default About;