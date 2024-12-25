import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "../assets/ballzo.png";
import bucleLogo from "../assets/bucle.png";
import code from "../assets/codeIcon.png";
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className='w-full h-full scroll-mt-24'>
            <h1 className='text-center text-4xl font-inter font-semibold pb-4'>Work Experience</h1>
            <p>

            </p>
            <VerticalTimeline
                lineColor='#12c59f'
            >
                <VerticalTimelineElement
                    contentStyle={{
                        background: 'inherit',
                        color: '#fff',
                        boxShadow: 'none',
                        padding: '0px',
                        borderRadius: "16px"
                        // border: "1px solid rgba(250, 250, 250, 0.15)"
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #12c59f' }}
                    date="February 2024 - present"
                    iconStyle={{ background: 'grey', color: '#fff' }}
                    icon={
                        <div className='flex flex-col items-center justify-center'>
                            <a href="https://bucle.dev" target="_blank" rel="noopener noreferrer">
                                <motion.img className="mt-0 w-full rounded-full" src={bucleLogo} alt="logo" whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }} />
                            </a>
                        </div>

                    }
                    shadowSize="small"
                >
                    <div className='border-[2px] border-[#12c59f] rounded-[16px] p-4 bg-[#0F1524] flex flex-col gap-4'>
                        <h3 className="text-2xl font-bold">Frontend Developer</h3>
                        <h4 className="text-lg font-semibold">Bucle Labs Pvt. Ltd.</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start text-sm tracking-wide">
                                <img
                                    src={code}
                                    alt="bullet"
                                    className="w-4 h-4 mt-1 mr-2"
                                />
                                Developed user interfaces with Next.js, React.js, TypeScript, Material UI and Tailwind CSS, using Redux
                                for state management. Executed API integration using Redux Thunk for asynchronous actions, ensuring efficient
                                data flow. Ensured cross-browser compatibility and responsiveness through thorough testing and debugging.
                            </li>
                            <li className="flex items-start text-sm tracking-wide">
                                <img
                                    src={code}
                                    alt="bullet"
                                    className="w-4 h-4 mt-1 mr-2"
                                />
                                Coordinated with Backend and UI/UX teams to resolve bugs, define requirements, and develop responsive,
                                user-friendly components.
                            </li>
                        </ul>

                    </div>

                </VerticalTimelineElement>



                <VerticalTimelineElement
                    contentStyle={{
                        background: 'inherit',
                        color: '#fff',
                        boxShadow: 'none',
                        padding: '0px',
                        borderRadius: "16px"
                        // border: "1px solid rgba(250, 250, 250, 0.15)"
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #12c59f' }}
                    date="February 2024 - present"
                    iconStyle={{ background: 'grey', color: '#fff' }}
                    icon={
                        <div className='flex flex-col items-center justify-center'>
                            <a href="https://ballzo.in/" target="_blank" rel="noopener noreferrer">
                                <motion.img className="mt-0 w-full rounded-full" src={logo} alt="logo" whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }} />
                            </a>

                        </div>
                    }
                    shadowSize="small"
                >
                    <div className='border-[2px] border-[#12c59f] rounded-[16px] p-4 bg-[#0F1524] flex flex-col gap-4'>
                        <h3 className="text-2xl font-bold">Frontend Developer</h3>
                        <h4 className="text-lg font-semibold">Ballzo India Pvt. Ltd.</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start text-sm tracking-wide">
                                <img
                                    src={code}
                                    alt="bullet"
                                    className="w-4 h-4 mt-1 mr-2"
                                />
                                Devised a mobile-friendly web app for 30,000+ football players to book ground slots and process payments via
                                RazorPay. State and City dropdown, image compressor and SEO optimization.
                            </li>
                            <li className="flex items-start text-sm tracking-wide">
                                <img
                                    src={code}
                                    alt="bullet"
                                    className="w-4 h-4 mt-1 mr-2"
                                />
                                Built and published an Angular library for reusable components and models and used it in the app.
                            </li>
                        </ul>

                    </div>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}

export default Experience