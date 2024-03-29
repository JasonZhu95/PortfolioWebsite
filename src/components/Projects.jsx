import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { youtube } from '../assets';
import { causeway } from '../assets';
import { website } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, youtubeLink, source_code_link, youtube_source_code_link }) => {
  return(
    <div className ="overflow-hidden">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl w-full sm:max-w-[360px]'
        >
          <div id="youtubeDiv" className='relative w-full h-[230px]'>
            <iframe sandbox
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeLink}?autoplay=1&controls=0&mute=1&playlist=${youtubeLink}&loop=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
                onClick={() => window.open(youtube_source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={youtube}
                  alt='source code'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-2/3 h-2/3 object-contain'
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <ul className="mt-2 list-disc ml-5 space-y-2 text-secondary text-[14px]">
              {description.map((descript, index ) => (
                <li
                  key={`projects-descript-${index}`}
                >
                  {descript}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  )
}

const handleImageClick = () => {
  window.location.href = "https://playcauseway.com/";
};

const ProjectCardNoVideo = ({ index, name, description, tags, youtubeLink, source_code_link, youtube_source_code_link }) => {
  return(
    <div className ="overflow-hidden">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl w-full sm:max-w-[360px]'
        >
          <div id="youtubeDiv" className='relative w-full h-[230px]'>
            <img
              src={causeway}
              alt='project_image'
              className='w-full h-full object-contain rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open("https://playcauseway.com/", "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={website}
                  alt='source code'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <ul className="mt-2 list-disc ml-5 space-y-2 text-secondary text-[14px]">
              {description.map((descript, index ) => (
                <li
                  key={`projects-descript-${index}`}
                >
                  {descript}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-full md:max-w-2xl leading[30px]"
        >
          These are some of the projects that I've worked on.  
          I've created a variety of projects, ranging from personal 
          projects to collaborative work both in and outside of school.
          Check out a selection of my most notable projects including 
          details on the technologies and specific problems that I've solved. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          if (project.id === 'Causeway')
          {
            return (
              <ProjectCardNoVideo key={`project-${index}`}
              index={index}
              {...project}
              />
            );
          }
        
        return (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}
          />
        );
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");