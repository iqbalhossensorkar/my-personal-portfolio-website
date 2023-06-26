import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import culinarycooking from '../assets/projects/culinary-cooking-school2.png'
import Button from '../Button/Button';
import ButtonSecond from '../Button/ButtonSecond';

const Showcase1 = () => {
    return (
        <div className="hero lg:mt-10">
            <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <h1 className="font-bold">Culionary Arts School 🍚</h1>
                        <p className="py-6">React Project. Anyone can buy cooking courses from here. Payment system stripe not setup.  Fully mobile first Responsive. Firebase Login, Signup Auth. Backend MongoDB, Express, Node JS. Admin Panel, Instructor Dashboard, Student Dashboard.</p>
                        <p><span className='text-[#e77070] font-bold'>Admin:</span> afroja@gmail.com</p>
                        <p><span className='text-[#e77070] font-bold'>Password:</span> afrojaM</p>
                        <div className='flex justify-between items-center'>
                            <div className='px-4 py-2 bg-[#3cb2f6] shadow-2xl'><FaReact className='text-white' /></div>
                            <div className='px-4 py-2 bg-[#96c84b]'><FaNodeJs /></div>
                            <div className='px-4 py-2 bg-[#161616]'><SiMongodb className='text-green-600' /></div>
                            <div className='px-4 py-2 bg-[#c6c6c6]'><SiExpress /></div>
                        </div>
                        <div className='mt-2 flex items-center justify-between'>
                            <div onClick={() => window.open('https://csca-cooking-school.web.app/', '_blank')}>
                                <Button />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/culinary-cooking-school-client', '_blank')}>
                                <ButtonSecond />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/culinary-art-school-server', '_blank')}>
                                <ButtonSecond />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none flex-shrink-0 w-full bg-[#ddf7ee] max-w-sm">
                    <div className="card-body">
                        <img src={culinarycooking} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase1;