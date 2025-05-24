import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github, website, youtube } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  youtubeLink,
  imageBackground,
  source_code_link,
  youtube_source_code_link,
  website_link,
  startTime = 0,
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl w-full sm:max-w-[360px]"
        >
          {imageBackground && (
            <div id="websiteDiv" className="relative w-full h-[230px]">
              <img
                src={imageBackground}
                alt="project_image"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                {youtube_source_code_link && (
                  <div
                    onClick={() =>
                      window.open(youtube_source_code_link, "_blank")
                    }
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={youtube}
                      alt="source code"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                )}
                {website_link && (
                  <div
                    onClick={() => window.open(website_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={website}
                      alt="website link"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                )}
                {source_code_link && (
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          {youtubeLink && (
            <div id="youtubeDiv" className="relative w-full h-[230px]">
              <iframe
                sandbox
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeLink}?autoplay=1&controls=0&mute=1&playlist=${youtubeLink}&loop=1&start=${startTime}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                {youtube_source_code_link && (
                  <div
                    onClick={() =>
                      window.open(youtube_source_code_link, "_blank")
                    }
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={youtube}
                      alt="source code"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                )}
                {website_link && (
                  <div
                    onClick={() => window.open(website_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={website}
                      alt="website link"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                )}
                {source_code_link && (
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <ul className="mt-2 list-disc ml-5 space-y-2 text-secondary text-[14px]">
              {description.map((descript, index) => (
                <h4 key={`projects-descript-${index}`}>{descript}</h4>
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
  );
};

const handleImageClick = () => {
  window.location.href = "https://playcauseway.com/";
};

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
          Here are some of the projects I’ve worked on—ranging from school
          assignments and personal prototypes to professional multiplayer games.
          Each project reflects a different stage in my growth as a developer,
          and highlights the tools I’ve used, the challenges I’ve solved.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
