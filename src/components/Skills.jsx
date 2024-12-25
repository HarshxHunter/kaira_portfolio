import React from 'react';
import { Backend_skill, Frontend_skill, Languages, SoftwareTools } from '../constants';
import SkillDataProvider from './sub/SkillDataProvider';
import videoSrc from "../assets/skills/cards-video.webm";

const Skills = () => {
  return (
    <section 
        id="skills"
        className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 scroll-mt-28! z-20'
        // style={{ transform: "scale(0.9)"}}    
    >

        <h2 className='text-4xl pb-10 text-center text-[#d4d4d4]'>
            Skills
        </h2>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Frontend_skill.map((item, index) => (
                <SkillDataProvider 
                    key={index}
                    src={item.Image}
                    width={item.width}
                    height={item.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Backend_skill.map((item, index) => (
                <SkillDataProvider 
                    key={index}
                    src={item.Image}
                    width={item.width}
                    height={item.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {SoftwareTools.map((item, index) => (
                <SkillDataProvider 
                    key={index}
                    src={item.Image}
                    width={item.width}
                    height={item.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Languages.map((item, index) => (
                <SkillDataProvider 
                    key={index}
                    src={item.Image}
                    width={item.width}
                    height={item.height}
                    index={index}
                />
            ))}
        </div>

        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover'>
                <video 
                    className='w-full h-auto'
                    preload='false'
                    playsInline
                    loop 
                    muted
                    autoPlay
                    src={videoSrc}
                />
            </div>
        </div>

    </section>
  )
}

export default Skills