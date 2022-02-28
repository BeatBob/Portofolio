// import styles from "../styles/About.module.css";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Work.module.css";
import LinkIcon from "@mui/icons-material/Link";

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
    <section
      aria-label="Work"
      className="max-w-5xl min-h-screen mx-auto pt-24"
      id="Work"
    >
      <header className="font-bold w-full flex h-10 mb-10">
        <h2 className="min-w-[200px] pr-5">
          <span className="text-xl text-black dark:text-[#4831d4]">03. </span>
          <span className="font-sans text-3xl dark:text-white">
            Some Things I&apos;ve Built
          </span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center"></span>
      </header>
      {/* projects list  */}
      <ul className="w-full">
        <li className="w-full grid grid-cols-12 relative mb-20">
          <a
            href="https://kicks-commerce.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 col-end-9 relative w-full h-[370px]"
          >
            <Image
              src="/Kicks_shop.png"
              alt="project 1"
              layout="fill"
              className="grayscale hover:grayscale-0 transition"
            />
          </a>

          <div className="col-start-8 col-end-13 absolute right-0 top-10 font-bold ">
            <p className="text-right ">Featured Project</p>
            <h4 className="text-right text-2xl mb-6 text-black dark:text-white">
              Kicks eCommerce
            </h4>
            <div
              className={`${styles.desc} bg-[#112240] mb-5 flex justify-center items-center p-4`}
            >
              <p className="text-right text-white font-medium font-sans">
                An eCommerce website selling Nike products. Responsive & easy to
                use. Log-in, select the item you want to buy, set the quantity
                of the item you choose, you can see a list of the item you
                selected in the shopping cart.
              </p>
            </div>
            <ul className="flex justify-between mb-4">
              <li className="text-sm font-extrabold text-black dark:text-white">
                React
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                Tailwind CSS
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                Framer Motion
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                Firebase
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                Material UI
              </li>
            </ul>
            <ul className="flex float-right gap-4 ">
              <li>
                <a
                  href="https://github.com/BeatBob/Kicks-eCommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://kicks-commerce.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="w-full grid grid-cols-12 relative mb-20">
          <a
            href="https://airbnb-clone-next-brown.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-5 col-end-13 relative w-full h-[370px]"
          >
            <Image
              src="/AirBnb_Clone.png"
              alt="project 1"
              layout="fill"
              className="grayscale hover:grayscale-0 transition"
            />
          </a>

          <div className="col-start-1 col-end-6 absolute right-0 top-10 font-bold ">
            <p>Featured Project</p>
            <h4 className="text-2xl mb-6 text-black dark:text-white">
              Kicks eCommerce
            </h4>
            <div
              className={`${styles.desc} bg-[#112240] mb-5 flex justify-center items-center p-4`}
            >
              <p className="text-white font-medium font-sans">
                AirBnb clone website that allowed you to set destination, date
                range, number of guests.
              </p>
            </div>
            <ul className="flex justify-start gap-5 mb-4">
              <li className="text-sm font-extrabold text-black dark:text-white">
                React
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                NextJS
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                Tailwind CSS
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                MapBox API
              </li>
            </ul>

            <ul className="flex gap-4 ">
              <li>
                <a
                  href="https://github.com/BeatBob/Airbnb-clone-next"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://airbnb-clone-next-brown.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="w-full grid grid-cols-12 relative">
          <a
            href="https://rps-the-games.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 col-end-9 relative w-full h-[370px]"
          >
            <Image
              src="/RPS_Game.png"
              alt="project 1"
              layout="fill"
              className="grayscale hover:grayscale-0 transition"
            />
          </a>

          <div className="col-start-8 col-end-13 absolute right-0 top-10 font-bold ">
            <p className="text-right ">Featured Project</p>
            <h4 className="text-right text-2xl mb-6 text-black dark:text-white">
              Kicks eCommerce
            </h4>
            <div
              className={`${styles.desc} bg-[#112240] mb-5 flex justify-center items-center p-4`}
            >
              <p className="text-right text-white font-medium font-sans">
                A Rock-Paper-Scissors game created using vanilla JavaScript &
                CSS. Choose your hand and play the game againts computer.
              </p>
            </div>

            <ul className="flex mb-4 justify-end gap-5">
              <li className="text-sm font-extrabold text-black dark:text-white">
                JavaScript
              </li>
              <li className="text-sm font-extrabold text-black dark:text-white">
                CSS
              </li>
            </ul>

            <ul className="flex float-right gap-4 ">
              <li>
                <a
                  href="https://github.com/BeatBob/Rock-Paper-scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://rps-the-games.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all dark:brightness-200 hover:dark:contrast-200"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Work;
