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
                        <p className='my-2 max-w-xl py-6 text-neutral-300 leading-8'>
                            I'm a Software Developer passionate about building scalable, high-performance, and user-focused web applications using{" "}
                            <strong>Next.js</strong>, <strong>React.js</strong>, <strong>TypeScript</strong>, and modern frontend technologies.
                            With experience working on production-grade fintech and SaaS platforms, I focus on creating clean,
                            maintainable architectures, reusable component systems, and seamless user experiences that balance performance,
                            scalability, and business requirements.
                            <br />
                            <br />
                            I enjoy taking ownership of products from development to deployment, collaborating across cross-functional teams,
                            and solving complex frontend challenges with efficient and reliable solutions. My expertise includes responsive UI
                            development, state management, API integrations, authentication systems, and building scalable applications with a
                            strong emphasis on code quality, reusability, and long-term maintainability.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe