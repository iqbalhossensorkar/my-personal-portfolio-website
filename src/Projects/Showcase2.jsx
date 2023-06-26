import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import bigbear from '../assets/projects/toy-market2.png'
import Button from '../Button/Button';
import ButtonSecond from '../Button/ButtonSecond';

const Showcase2 = () => {
    return (
        <div className="hero lg:mt-10">
            <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                <div className="card rounded-none flex-shrink-0 w-full bg-[#eaf7dd] max-w-sm">
                    <div className="card-body">
                        <img src={bigbear} alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <h1 className="font-bold">Big Bear Toys 🧸</h1>
                        <p className="py-6">This is a Toy selling website. A seller can list toys here, and can see his toys collections. and a user can see all toys which were seller addeded.  Fully mobile first Responsive. Firebase Login, Signup Auth. Backend MongoDB, Express, Node JS.</p>
                        <p><span className='text-[#e77070] font-bold'>User:</span> lauramaxwell@gmail.com</p>
                        <p><span className='text-[#e77070] font-bold'>Password:</span> lauraM</p>
                        <div className='flex justify-between items-center'>
                            <div className='px-4 py-2 bg-[#3cb2f6] shadow-2xl'><FaReact className='text-white' /></div>
                            <div className='px-4 py-2 bg-[#96c84b]'><FaNodeJs /></div>
                            <div className='px-4 py-2 bg-[#161616]'><SiMongodb className='text-green-600' /></div>
                            <div className='px-4 py-2 bg-[#c6c6c6]'><SiExpress /></div>
                        </div>
                        <div className='mt-2 flex items-center justify-between'>
                            <div onClick={() => window.open('https://bog-bear-toy.web.app/', '_blank')}>
                                <Button />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/big-bear-toy-client', '_blank')}>
                                <ButtonSecond />
                            </div>
                            <div onClick={() => window.open('https://github.com/iqbalhossensorkar/big-bear-toy-server', '_blank')}>
                                <ButtonSecond />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Showcase2;