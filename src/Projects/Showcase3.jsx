import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import bdcuisine from '../assets/projects/bangladeshi-cuisine2.png'
import Button from '../Button/Button';
import ButtonSecond from '../Button/ButtonSecond';

const Showcase3 = () => {
    return (
        <div className="hero lg:mt-10">
            <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <h1 className="font-bold">Bangladeshi Cuisine 👨‍🍳</h1>
                        <p className="py-6">This is a chef finding website. A user can visit this site for finding best chefs in Bangladesh. Also can see their best recipes. Fully mobile first Responsive. Firebase Login, Signup Auth. Backend MongoDB, Express, Node JS.</p>
                        <p><span className='text-[#e77070] font-bold'>User:</span> johny@gmail.com</p>
                        <p><span className='text-[#e77070] font-bold'>Password:</span> johnyD</p>
                        <div className='flex justify-between items-center'>
                            <div className='px-4 py-2 bg-[#3cb2f6] shadow-2xl'><FaReact className='text-white' /></div>
                            <div className='px-4 py-2 bg-[#96c84b]'><FaNodeJs /></div>
                            <div className='px-4 py-2 bg-[#161616]'><SiMongodb className='text-green-600' /></div>
                            <div className='px-4 py-2 bg-[#c6c6c6]'><SiExpress /></div>
                        </div>
                        <div className='mt-2 flex items-center justify-between'>
                            <div onClick={() => window.open('https://bangladeshi-cuisine-second.web.app/', '_blank')}>
                                <Button />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/bangladeshi-cuisine-client', '_blank')}>
                                <ButtonSecond />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/bangladeshi-cuisine-server', '_blank')}>
                                <ButtonSecond />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none flex-shrink-0 w-full bg-[#f7e8dd] max-w-sm">
                    <div className="card-body">
                        <img src={bdcuisine} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase3;