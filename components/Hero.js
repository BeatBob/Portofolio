import styles from "../styles/Hero.module.css";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      aria-label="my hero page"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square relative max-w-6xl min-h-screen m-auto overflow-hidden"
      id="Home"
    >
      <header className="pt-32 ">
        <p className="font-semibold text-xl dark:text-[#64ffda] opacity-80">
          Hi<span className="font-sans dark:text-white">,</span>
        </p>
        <h1 className="font-sans font-bold text-7xl ">
          <span className="dark:text-[#ccd6f6] ">I&apos;m Robi ,</span>
          <br />
          <span className="dark:text-[#8892b0] ">Front-end Developer.</span>
        </h1>

        <p className="font-sans font-bold text-2xl dark:text-[#8892b0] my-5">
          I build things for the web.
        </p>

        <button
          className="inline-block h-fit rounded-sm  border-2 border-cyan-500  
          dark:text-white hover:text-white hover:bg-[#4831d4] hover:dark:bg-[#fffb] hover:dark:text-[#0a192f] duration-200"
        >
          <a
            href="mailto:mrobichaniago@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold tracking-wider text-base px-8 py-4 inline-block"
          >
            Send Message!
          </a>
        </button>
      </header>

      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      <div className="absolute right-60 left-auto top-20 flex items-center">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-64 h-w-64 text-yellow-500 dark:text-yellow-500 opacity-60"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;
