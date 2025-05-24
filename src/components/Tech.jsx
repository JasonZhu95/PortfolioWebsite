import { motion } from "framer-motion";
import {
  developerTools,
  programmingLanguages,
  webTechnologies,
} from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technical Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          What I Work With
        </h2>
      </motion.div>
      <p className={`${styles.sectionSubText} text-center`}>Programming Languages</p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {programmingLanguages.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-white-100 text-[14px] pl-1 tracking-wider text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <p className={`${styles.sectionSubText} text-center mt-10`}>
        Web Technologies
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {webTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-white-100 text-[14px] pl-1 tracking-wider text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <p className={`${styles.sectionSubText} text-center mt-10`}>
        Developer Tools
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {developerTools.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-white-100 text-[14px] pl-1 tracking-wider text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
