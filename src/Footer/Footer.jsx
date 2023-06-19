import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    return (
        <div>
            <footer className="footer footer-center p-10  text-base-content rounded">
                <div className='flex items-center'>
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
                <div className="grid grid-flow-col gap-4 list-none">
                    <li><Link smooth to="/#header" className='focus:text-[#18C08B] hover:underline'>Home</Link></li>
                    <li><Link smooth to="/#about" className='focus:text-[#18C08B] hover:underline'>About</Link></li>
                    <li><Link smooth to="/#projects" className='focus:text-[#18C08B] hover:underline'>Projects</Link></li>
                    <li><Link smooth to="/#contact" className='focus:text-[#18C08B] hover:underline'>Contact Me</Link></li>
                </div>
            </footer>
        </div>
    );
};

export default Footer;