import React, {useRef} from 'react'
import { PROJECTS } from '../constants'
import Project from './sub/Project'
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {

  
  return (
    <section id="projects" className='px-10 scroll-mt-24'>
      <div className='border-b border-neutral-900 pb-4'>

        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity:0, y: -100}}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
          Projects
        </motion.h2>

        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div 
                whileInView={{ opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{ duration: 1}}
              className='w-full lg:w-1/4'>
                  <img 
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className='w-40 h-40 mb-6 rounded shadow-lg object-cover'
                  />
              </motion.div>

              {/* <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-40 rounded shadow-lg object-cover"
                />
              </div> */}

              <motion.div 
              whileInView={{ opacity: 1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{ duration: 1}}
              className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold'>
                      {project.title}
                  </h6>
                  <p className='mb-4 text-neutral-400'>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* <h2 className='text-4xl pb-10 text-center text-[#d4d4d4]'>
            Projects
        </h2>

        <div className='w-full h-full flex flex-col justify-center items-center'>
            {PROJECTS.map((project, index) => (
                <Project project={project} key={index}/>
            ))}
        </div> */}
    </section>
  )
}

export default Projects