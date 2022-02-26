import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mapp from "./Mapp";
import { Button } from "@mui/material";

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
    <motion.section
      aria-label="Experience & Skills"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="max-w-5xl min-h-screen mx-auto pt-20"
      id="Contact"
    >
      <header className="font-bold w-full flex h-10">
        <h2 className="min-w-[200px]">
          <span className="text-xl text-black dark:text-[#4831d4]">04. </span>
          <span className="font-sans text-3xl dark:text-white">
            What&apos;s next?
          </span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center ml-9"></span>
      </header>

      <div className="h-5/6 grid grid-cols-2">
        <div className="px-12">
          <h4 className="">Get In Touch!</h4>
          <p className="">
            I&apos;m currently looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <button>CONTACT</button>
        </div>

        <Mapp />
      </div>
    </motion.section>
  );
}

export default Contact;
