import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

const Projects = () => {
    return (
        <section id="projects" className="bg-[#252525] m-1 p-2 min-h-60 dark:bg-[#DDDDDD] duration-300">
            <div className="mt-3">
                    <p className="flex justify-center items-center font-bold text-[#DC4F25] text-xl font-titleFont">Projects</p>
                </div>
            <div className='w-5/6 flex flex-wrap justify-evenly items-center mx-auto'>
                <a href="https://github.com/faizanalam11/helloReact">
                    <div className="w-56 bg-[#0a0a0a] text-white my-2 mx-3 items-center justify-evenly rounded-lg hover:scale-105 p-1 duration-300 dark:bg-gray-200 dark:text-black">
                        <div className=' bg-cover'>
                            <img src={project1} alt="developersImage" className='w-full h-[150px]'/>
                        </div>
                        <div>
                            <h3 className="font-bold m-1 text-xl">Aahar Villa</h3>
                            <div className='flex flex-row flex-wrap gap-2 m-1'>
                                <span className='techStack'>React.Js</span>
                                <span className='techStack'>HTML</span>
                                <span className='techStack'>Tailwind</span>
                                <span className='techStack'>NPM</span>
                            </div>
                            <p className='m-1 text-xs'>Creating a food delivery Web app to enshance user's expericence by using Hooks, Lazy Loading and Swiggy's public API</p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/faizanalam11/newsWebsite">
                    <div className="w-56 bg-[#0a0a0a] text-white my-2 mx-3 items-center justify-evenly rounded-lg hover:scale-105 p-1 duration-300 dark:bg-gray-200 dark:text-black">
                        <div className=' bg-cover'>
                            <img src={project2} alt="developersImage" className='w-full h-[150px]'/>
                        </div>
                        <div>
                            <h3 className="font-bold m-1 text-xl">News Maniac</h3>
                            <div className='flex flex-row flex-wrap gap-2 m-1'>
                                <span className='techStack'>React.Js</span>
                                <span className='techStack'>HTML</span>
                                <span className='techStack'>Tailwind</span>
                                <span className='techStack'>NPM</span>
                            </div>
                            <p className='m-1 text-xs'>News Maniac, a dynamic news platform that brings you the latest headlines, stories, and updates from around the globe. 🌎📰</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
} 

export default Projects;