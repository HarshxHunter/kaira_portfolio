import React from 'react';
import aboutPhoto from "../assets/about.jpg";
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className='w-full pt-10' id="about">
            <h1 className='py-8 text-center text-4xl'>
                About
                <span className='text-neutral-500'>Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'
                >
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutPhoto} alt="about" />
                    </div>
                </motion.div>


                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.

                            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe