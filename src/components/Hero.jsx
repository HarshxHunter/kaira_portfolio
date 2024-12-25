import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import brushStroke from "../assets/brush.png";
import { delay, motion } from 'framer-motion';
import { IoMdArrowForward } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import scroll from "../assets/scroll.png";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const textVariants = {
    scrollButton: {
        initial: {
            opacity: 0,
            y: 10, // Start position below
        },
        animate: {
            opacity: 1,
            y: 0, // Move to its intended position
            transition: {
                duration: 1, // Duration of the animation
                delay: 2, // Delay of 2 seconds before animation starts
                repeat: Infinity, // Infinite repetition
                repeatType: "reverse", // Animates back and forth
            },
        },
    },
}


const Hero = () => {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='pb-4 lg:mb-35 scroll-mt-28 z-10' id="hero">
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                            Harsh S. {''}
                            <span className="relative inline-block z-10">
                                <img
                                    src={brushStroke}
                                    alt="Brushstroke Background"
                                    className="absolute left-4 bottom-2 sm:left-4 sm:bottom-2 md:bottom-3 md:left-6 w-full h-full object-cover -z-10 custom-position"
                                    style={{
                                        transform: "scale(2)",
                                    }}
                                />
                                <span className="relative text-black">Kaira</span>
                            </span>
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
                            text-4xl tracking-tight text-transparent'>
                            Frontend Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {/* {HERO_CONTENT} */}
                            Dedicated Frontend Developer with 1+ year of hands-on experience in designing and implementing responsive and dynamic web applications while using modern frontend technologies with best practises.
                        </motion.p>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='flex gap-4 pb-4'>
                            <button className='contactMe text-sm gap-1 font-semibold' onClick={handleScrollToContact}>
                                Contact Me here
                                <IoMdArrowForward className='text-lg mt-[2px]' />
                            </button>

                            <a
                                href="/Harsh_Resume.pdf"
                                download="Harsh_Kaira_Resume.pdf"
                                className='bg-orange-200 hover:bg-orange-300 hover:shadow-[0px_4px_8px_rgba(255,255,255,0.4)] py-2 px-4 rounded-full text-black text-sm flex justify-center items-center gap-1 font-semibold transition-all duration-300'
                            >
                                Download Resume
                                <RiDownloadLine className='text-lg' />
                            </a>

                        </motion.div>

                        <div className="py-4 flex items-center justify-center gap-4 text-4xl">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.4 }}
                            >
                                <a href='https://www.linkedin.com/in/harsh-singh-kaira/' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='cursor-pointer' />
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                <a href='https://github.com/HarshxHunter/' target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='cursor-pointer' />
                                </a>

                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.6 }}
                            >
                                <a href='https://www.facebook.com/harshsingh.kaira' target="_blank" rel="noopener noreferrer">
                                    <FaFacebookSquare className='cursor-pointer' />
                                </a>

                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.7 }}
                            >
                                <a href='https://leetcode.com/u/HARSH_kaira/' target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode className='cursor-pointer' />
                                </a>

                            </motion.div>

                            {/* <motion.img  src={scroll} alt="" /> */}

                        </div>

                        <div className='w-full hidden md:flex  md:justify-end'>
                            <motion.img
                                variants={textVariants.scrollButton}
                                initial="initial"
                                animate="animate"
                                src={scroll}
                                alt="scroll down"
                                className="w-10 pt-20"
                            />
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt="Harsh Singh Kaira" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero