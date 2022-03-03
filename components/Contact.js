import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mapp from "./Mapp";

function Contact() {
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
      className="max-w-5xl min-h-[85vh] mx-auto pt-20 "
      id="Contact"
    >
      <header className="font-bold xl:w-full w-2/4 mx-auto flex justify-center h-10 mb-8">
        <span className="hidden sm:block h-[2px] bg-[#4831d4] w-28 self-center mr-9"></span>
        <h2 className="min-w-[250px] text-center ">
          <span className="text-xl text-black dark:text-[#4831d4]">04. </span>
          <span className="font-sans text-3xl dark:text-white">
            What&apos;s next?
          </span>
        </h2>
        <span className="hidden sm:block h-[2px] bg-[#4831d4] w-28 self-center ml-9"></span>
      </header>

      <div className="h-5/6 xl:grid xl:grid-cols-2 xl:w-full w-4/5 mx-auto">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="xl:px-12 text-center xl:text-left mb-8"
        >
          <h4 className="text-3xl dark:text-white opacity-90 font-bold mb-8">
            Get In Touch!
          </h4>
          <p className="text-lg font-semibold font-sans dark:text-white opacity-95 mb-10">
            I&apos;m currently looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <button
            className="rounded-sm px-4 py-2 border-2 border-cyan-500  
          dark:text-white hover:text-white hover:bg-[#4831d4] hover:dark:bg-[#fffb] hover:dark:text-[#0a192f] duration-200"
          >
            <a
              href="mailto:mrobichaniago@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold tracking-wider text-xl"
            >
              Send Message!
            </a>
          </button>
        </motion.div>

        <Mapp />
      </div>
    </section>
  );
}

export default Contact;
