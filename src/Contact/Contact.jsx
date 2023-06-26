import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import coding from '../assets/coding.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_os4e9tu', 'template_c1xnvao', form.current, '_qYVmUjH-zyoJ4JQ8')
            .then((result) => {
                console.log(result.text);
                toast('Message Sent Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Something went wrong')
            });
    };
    return (
        <section id="contact" className='w-10/12 mx-auto mt-20'>
            <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(${coding})`, borderRadius: '20px' }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-2xl mt-5 lg:text-5xl font-bold text-center">Contact Me</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className='w-full input bg-inherit mb-4 backdrop:filter backdrop-blur-3xl shadow-2xl hover:bg-white hover:text-black transition  ' type="text" name="name" required/>
                            <label>Email</label>
                            <input className='w-full input bg-inherit mb-4 backdrop:filter backdrop-blur-3xl shadow-2xl hover:bg-white hover:text-black transition' type="email" name="email" required/>
                            <label>Message</label>
                            <textarea className='w-full textarea bg-inherit backdrop:filter backdrop-blur-3xl shadow-2xl hover:bg-white hover:text-black transition' name="message" required/>
                            <input className='btn w-full bg-inherit backdrop:filter backdrop-blur-3xl shadow-2xl hover:bg-white hover:text-black border-none mt-5 mb-5' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </section>
    );
};

export default Contact;