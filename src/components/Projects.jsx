import React, { useRef } from 'react'
import { PROJECTS } from '../constants'
import Project from './sub/Project'
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {

  return (
    <section id="projects" className='px-10 scroll-mt-24'>
      <div className='pb-4'>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'
        >
          Projects
        </motion.h2>

        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-14 flex flex-wrap items-start lg:justify-center gap-6'>

              {/* IMAGE */}
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className='group relative w-full lg:w-1/4 flex justify-center cursor-pointer'
              >
                <div className='relative overflow-hidden rounded-2xl shadow-2xl border border-neutral-800'>

                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className='w-40 h-40 mb-6 rounded-2xl object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
                  />

                  {/* OVERLAY */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 bg-black/40'>
                    <div className='flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md'>
                      <FiExternalLink size={18} className='text-white' />
                      <span className='text-sm text-white font-medium'>
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* CONTENT */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'
              >

                {/* TITLE LINK */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group inline-flex items-center gap-2 mb-3 cursor-pointer'
                >
                  <h6 className='text-xl font-semibold underline underline-offset-4 decoration-neutral-500 transition-all duration-300 group-hover:text-purple-400 group-hover:decoration-purple-400'>
                    {project.title}
                  </h6>

                  <FiExternalLink
                    size={18}
                    className='opacity-70 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1'
                  />
                </a>

                <p className='mb-5 text-neutral-400 leading-relaxed'>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-200"
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

export default Projects;