import { HiRocketLaunch } from 'react-icons/hi2';
import image from '../assets/myself.jpg'
import Typewriter from "typewriter-effect";
import Lottie from 'lottie-react';
import scrollDownBar from '../assets/scroll.json'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
   
    return (
        <section className='mt-20' id="header">
            <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto justify-center items-center'>
                <div className="justify-self-center">
                    <div className="text-left mb-3">
                        <p className='md:text-4xl text-gray-500'>Hi, I am 👋</p>
                        <h1 className='md:text-4xl font-bold text-[#18C08B]'>Iqbal Hossen Sorkar</h1>
                    </div>
                    <div className="text-left text-gray-300 shadow-2xl underline underline-offset-8 decoration-[#c9f8e9] font-light md:text-3xl mb-10">
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "MERN Stack Developer", "Front-End Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </div>
                    <p className='text-lg text-gray-500'>Front-End Developer with high level experience in React, Node Js, MongoDB, Express. Based in Dhaka, Bangladesh. 🍦</p>
                    <div className='flex items-center mt-2'>
                        <div className="grid grid-flow-col gap-4">
                            <FaFacebook onClick={() => window.open('https://www.facebook.com/profile.php?id=100014899789132', '_blank')} className="fill-[#18C08B] btn-circle btn-outline p-2 border-0 hover:border-[#18C08B] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"></FaFacebook>
                        </div>
                        <div className="grid grid-flow-col gap-4">
                            <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/iqbal-hossen-sorkar-441003278/', '_blank')} className="fill-[#18C08B] btn-circle btn-outline p-2 border-0 hover:border-[#18C08B] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"></FaLinkedin>
                        </div>
                        <div className="grid grid-flow-col gap-4">
                            <FaGithub onClick={() => window.open('https://github.com/iqbalhossensorkar', '_blank')} className="fill-[#18C08B] btn-circle btn-outline p-2 border-0 hover:border-[#18C08B] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"></FaGithub>
                        </div>
                    </div>
                    <button className='mt-4 btn btn-outline border-2 hover:bg-[#70DCBA] hover:border-[#70DCBA] text-[#18C08B]'>
                        Hire me
                        <HiRocketLaunch className='ml-2'></HiRocketLaunch>
                    </button>
                </div>
                <div className='justify-self-center'>
                    <img src={image} alt="" className='h-[400px] border-2 border-[#18C08B] rounded-tl-[74%] rounded-tr-[35%] rounded-br-[74%] rounded-bl-[46%] hover:rounded-tl-[54%] hover:rounded-tr-[74%] hover:rounded-br-[56%]' style={{ transition: 'border-radius 500ms ease-in-out' }} />
                </div>
            </div>
            <div>
                <Lottie className='h-20 mt-20' animationData={scrollDownBar}></Lottie>
            </div>
        </section>
    );
};

export default Home;






