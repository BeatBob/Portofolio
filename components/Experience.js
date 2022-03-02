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
    <section
      aria-label="Experience & Skills"
      className="max-w-2xl min-h-screen mx-auto pt-32"
      id="Skills"
    >
      <header className="font-bold w-4/5 lg:w-full m-auto flex h-10">
        <h2 className="min-w-[150px]">
          <span className="text-xl text-black dark:text-[#4831d4]">02. </span>
          <span className="font-sans text-3xl dark:text-white">Skills</span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center "></span>
      </header>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        <div className="w-4/5 lg:w-full mx-auto mt-6">
          <p className="font-bold text-base lg:text-lg opacity-80 dark:text-white font-sans text-center sm:text-left">
            I&apos;ve create some responsive websites that are fast, easy to
            use, own projects and built with best practices. The main area of my
            expertise is front-end development, HTML, CSS, JS, building small
            and medium web apps. <br /> <br /> Visit my LinkedIn profile for
            more details or just contact me.
          </p>
          <p className="mt-10 font-semibold text-base lg:text-lg opacity-80 dark:text-white font-sans text-center sm:text-left">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div className="sm:flex sm:justify-between w-8/12 mt-2">
            <ul className="mb-8 sm:mb-0">
              {technologies.map((tag) => (
                <li
                  className="dark:text-white font-semibold opacity-80 font-sans"
                  key={Math.random()}
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
                  key={Math.random()}
                >
                  <ArrowRightIcon />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
