import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import devjob from '../assets/projects/dev-jobs2.png'
import ButtonSecond from '../Button/ButtonSecond';
import Button from '../Button/Button';

const Showcase4 = () => {
    return (
        <div className="hero lg:mt-10">
            <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                <div className="card rounded-none flex-shrink-0 w-full bg-[#deddf7] max-w-sm">
                    <div className="card-body">
                        <img src={devjob} alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <h1 className="font-bold">Dev Jobs 🧑‍💻</h1>
                        <p className="py-6">A simple React and Javascript project. A job portal website. You can find all kind of it related jobs at here from renowned companies. Also you can apply remote or onsite jobs. Fully mobile first Responsive.</p>
                        <div className='flex justify-center gap-5 items-center'>
                            <div className='px-4 py-2 bg-[#3cb2f6] shadow-2xl'><FaReact className='text-white' /></div>
                            <div className='px-4 py-2 bg-[#ffff15]'><SiJavascript /></div>
                            <div className='px-4 py-2 bg-[#03a4b6]'><SiTailwindcss /></div>
                        </div>
                        <div className='mt-2 flex items-center justify-between'>
                            <div onClick={() => window.open('https://spontaneous-llama-74f2a0.netlify.app/', '_blank')}>
                                <Button />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/dev-jobs', '_blank')}>
                                <ButtonSecond />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Showcase4;