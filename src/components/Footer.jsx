import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='relative overflow-x-clip bg-neutral-950 -z-1'>
            <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-1'>

            </div>
            <div className='container py-4 pt-1 lg:pt-2 lg:py-2 px-5 md:px-8'>
                <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='text-white/40'>
                        &copy; 2024. All rights reserved.
                    </div>
                    <div className="py-4 flex items-center justify-center gap-4 text-4xl">
                        <div
                        >
                            <a href='https://www.linkedin.com/in/harsh-singh-kaira/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='cursor-pointer' />
                            </a>
                        </div>
                        <div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <a href='https://github.com/HarshxHunter/' target="_blank" rel="noopener noreferrer">
                                <FaGithub className='cursor-pointer' />
                            </a>

                        </div>
                        <div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            <a href='https://www.facebook.com/harshsingh.kaira' target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className='cursor-pointer' />
                            </a>

                        </div>
                        <div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.7 }}
                        >
                            <a href='https://leetcode.com/u/HARSH_kaira/' target="_blank" rel="noopener noreferrer">
                                <SiLeetcode className='cursor-pointer' />
                            </a>

                        </div>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer