// import styles from "../styles/About.module.css";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Work() {
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
      aria-label="Work"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="max-w-5xl min-h-screen mx-auto pt-32"
      id="Work"
    >
      <header className="font-bold w-full flex h-10">
        <h2 className="min-w-[200px]">
          <span className="text-xl">03. </span>
          <span className="font-sans text-3xl dark:text-white">
            Some Things I&apos;ve Built
          </span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center "></span>
      </header>
    </motion.section>
  );
}

export default Work;
