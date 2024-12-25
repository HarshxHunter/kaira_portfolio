import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project = ({ project }) => {

    const { title, image, description, tags } = project;

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    console.log(title);

    return (

        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='mx-32 my-8'
        >
            {/* <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"> */}
            <div className='flex gap-2 bg-gray-100 mx-2 border border-black/5 rounded-2xl overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>

                <div className='w-1/2'>
                    <img src={image} alt="Project Image" className='w-[600px] h-[450px] rounded-t-lg shadow-2xl bg-cover' />

                </div>


                <div className="flex flex-col justify-center items-center h-full gap-10 w-1/2 p-4">
                    <h3 className="text-2xl text-center font-semibold">{title}</h3>
                    <p className="text-center  text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap justify-center mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>





            {/* <img src={image} alt="Projects Image"

                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                            transition 
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2

                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2

                            group-even:right-[initial] group-even:-left-40"
                /> */}
            {/* </section> */}
        </motion.div>

    )
}

export default Project;