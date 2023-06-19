import Lottie from 'lottie-react';
import animation from '../assets/react-and-node-development-mobile-first.json'
import './About.css'

const About = () => {
  return (
    <section id="about" className='w-10/12 mx-auto'>
      <div className="triangle hidden lg:block"></div>
      <h1 className='text-center mt-20 lg:mt-36 font-bold text-xl lg:text-4xl text-[#18C08B] mb-10'>About Me</h1>
      <div className="card lg:card-side bg-[#ebf9f5]">
        <div className='h-96'>
          <Lottie animationData={animation}></Lottie>
        </div>
        <div className="card-body lg:px-10 text-center lg:text-left">
          <p className='mb-3 font-mono'>Passionate and motivated fresher full-stack developer specializing in React, front-end development, and Node.js. I have a solid foundation in building dynamic and interactive user interfaces using React and have also gained proficiency in server-side development using Node.js, Express, and MongoDB.</p>
          <p className='mb-3 font-mono font-bold text-gray-500'>I possess a solid foundation in HTML, CSS, and JavaScript, and I am continuously expanding my knowledge and proficiency in React, one of the most popular front-end frameworks. I am excited to leverage Reacts powerful capabilities to build dynamic and responsive applications that leave a lasting impact on users.</p>
          <p className='font-mono'>I have learned working with the power of Node.js to build robust and scalable back-end systems. Leveraging the Express framework, I have experience creating RESTful APIs and implementing various middleware functionalities. I also have a strong understanding of MongoDB, a popular NoSQL database, and its integration with Node.js to efficiently store and retrieve data.</p>
        </div>
      </div>




    </section>
  );
};

export default About;