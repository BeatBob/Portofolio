import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const technologies = [
    "HTML/CSS",
    "Sass",
    "Tailwind CSS",
    "JavaScript (ES6)",
    "React",
    "NextJs",
    "Firebase",
    "Redux Toolkit",
  ];
  const Tools = ["Chrome DevTools", "GIT", "GITHUB", "Postman"];

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="max-w-2xl min-h-screen mx-auto  "
    >
      <div className="font-bold w-full flex h-10">
        <h2 className="min-w-[200px]">
          <span className="text-xl">01. </span>
          <span className="font-sans text-3xl dark:text-white">Skills</span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center "></span>
      </div>

      <div className="mt-6">
        <p className="font-bold text-lg opacity-80 dark:text-white font-sans">
          I&apos;ve create some responsive websites that are fast, easy to use,
          own projects and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, building small and
          medium web apps. <br /> Visit my LinkedIn profile for more details or
          just contact me.
        </p>
        <p className="mt-10 font-semibold text-lg opacity-80 dark:text-white font-sans">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className="flex justify-between w-8/12 mt-2">
          <ul>
            {technologies.map((tag) => (
              <li
                className="dark:text-white font-semibold opacity-80 font-sans"
                key={tag.indexOf()}
              >
                <ArrowRightIcon />
                {tag}
              </li>
            ))}
          </ul>
          <ul>
            {Tools.map((tag) => (
              <li
                className="dark:text-white font-semibold opacity-80 font-sans"
                key={tag.indexOf()}
              >
                <ArrowRightIcon />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
