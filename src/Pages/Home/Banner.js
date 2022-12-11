import React from 'react';
import img1 from '../../assets/img/pic1.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='flex items-center flex-col-reverse lg:flex-row my-8 mx-8'>
            <div className='w-full items-center lg:w-1/2 flex flex-col justify-center'>
                <div className="title">
                    <h1 className=" text-3xl leading-relaxed uppercase font-extrabold dark:text-white">Welcome to My Portfolio</h1>
                    <h1 className=" text-xl font-mono leading-relaxed uppercase font-extrabold text-orange-400  dark:text-white">Details more about me</h1>
                </div>
                <div>
                    <p className='my-4 text-gray-500 dark:text-gray-400'> Hi, This is Robiul Hasan Raian
                        <br />
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['A passionate frontend developer from Bangladesh', 'A MERN Stack Web Developer also']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></p>

                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1e0lS7yLylI5o2mro_sG0j5rqIVCDu177/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button type="button" className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">Resume</button></a>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <img className='w-5/6 h-5/6 rounded-full' src={img1} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;