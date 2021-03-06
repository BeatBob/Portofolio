import styles from "../styles/About.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
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
      aria-label="About Me"
      className="max-w-5xl min-h-screen mx-auto pt-32"
      id="About"
    >
      <header className="font-bold w-4/5 xl:w-full flex h-10 m-auto justify-center xl:justify-start">
        <h2 className="min-w-[200px]">
          <span className="text-xl text-black dark:text-[#4831d4]">01. </span>
          <span className="font-sans text-3xl dark:text-white">About Me</span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center "></span>
      </header>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        <div className="xl:grid xl:grid-cols-2">
          <div className="w-4/5 xl:w-full m-auto mb-20 xl:mb-0">
            <p className="text-base xl:text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa] font-sans text-center xl:text-left">
              Hello! My name is M.Robi, a self-taught Front-end Developer and I
              enjoy creating things that live on the internet. My interest in
              web development started back in November 2020 when I decided to
              learn about Digital Marketing — turns out i got an interest in web
              development.
            </p>
            <p className="text-base xl:text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa] font-sans text-center xl:text-left">
              I learned a lot from the sources available on the internet such as
              FreeCodeCamp, Youtube, Stack Overflow, etc - and it taught me a
              lot about HTML, CSS, javascript and it Frameworks!
            </p>
            <p className="text-base xl:text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa] font-sans text-center xl:text-left">
              Fast-forward to today, I want to take a bigger step and start a
              new career in Web Development.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className={styles.picture}>
              <Image
                src="/MRobi.png"
                alt="Robi's Picture"
                layout="fill"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
