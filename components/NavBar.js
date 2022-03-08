import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@mui/material";
import styles from "../styles/NavBar.module.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

export default function Navbar() {
  const { theme } = useTheme();
  const [dash, setDash] = useState("translate-x-64");
  const [back, setBack] = useState("");

  const menuOpen = () => {
    setDash(dash === "translate-x-64" ? "animate-dash" : "translate-x-64");
    setBack(dash === "translate-x-64" ? "rotate-180" : "");
  };

  return (
    <div className="">
      {/* burger nav */}
      <div
        className={`${dash} fixed top-0 right-0 flex h-screen md:hidden z-20 drop-shadow-xl `}
      >
        <div
          onClick={menuOpen}
          className={`${back} w-12 h-12 bg-stone-50 flex justify-center  items-center cursor-pointer`}
        >
          <MenuOpenIcon className="scale-150" />
        </div>

        <div className=" relative w-64 -mt-4 right-0 bg-[#eeeee6] dark:bg-[#0a192f] flex flex-col justify-around dark:border-l-2 dark:border-white">
          {/* logo  */}
          <div className="absolute top-10 w-full p-4 flex justify-center items-center hover:scale-110 transition-all">
            <a href="#Home">
              {theme === "dark" ? (
                <Image
                  src="/Logo_black.png"
                  alt="LOGO"
                  width={60}
                  height={60}
                />
              ) : (
                <Image
                  src="/Logo_white.png"
                  alt="LOGO"
                  width={60}
                  height={60}
                />
              )}
            </a>
          </div>

          {/* menu nav  */}
          <div>
            <nav className="flex flex-col gap-4 justify-center items-center mt-36">
              <a
                href="#About"
                className="text-gray-600 dark:text-white text-lg font-bold font-sans block w-full text-center py-2 hover:dark:bg-slate-700 hover:bg-white border-b-2 border-white"
              >
                About
              </a>
              <a
                href="#Skills"
                className="text-gray-600 dark:text-white text-lg font-bold font-sans block w-full text-center py-2 hover:dark:bg-slate-700 hover:bg-white border-b-2 border-white"
              >
                Experience
              </a>
              <a
                href="#Work"
                className="text-gray-600 dark:text-white text-lg font-bold font-sans block w-full text-center py-2 hover:dark:bg-slate-700 hover:bg-white border-b-2 border-white"
              >
                Work
              </a>
              <a
                href="#Contact"
                className="text-gray-600 dark:text-white text-lg font-bold font-sans block w-full text-center py-2 hover:dark:bg-slate-700 hover:bg-white border-b-2 border-white"
              >
                Contact
              </a>
            </nav>

            <div className="w-full flex justify-between mt-10 mb-10">
              <a
                href="https://github.com/BeatBob/"
                target="blank"
                className="p-2 transition-all brightness-200 hover:contrast-200 hover:scale-150"
              >
                <GitHubIcon />
              </a>{" "}
              <a
                href="https://twitter.com/BeatmBob"
                target="blank"
                className="p-2 transition-all brightness-200 hover:contrast-200 hover:scale-150"
              >
                <TwitterIcon />
              </a>{" "}
              <a
                target="blank"
                className="p-2 transition-all brightness-200 hover:contrast-200 hover:scale-150"
              >
                <LinkedInIcon />
              </a>{" "}
              <a
                href="https://codepen.io/dumbob"
                target="blank"
                className="p-2 transition-all brightness-200 hover:contrast-200 hover:scale-150"
              >
                <CodeIcon />
              </a>
            </div>

            <p className="font-sans font-bold text-center hover:text-black dark:text-white hover:dark:text-[#64ffda]">
              <a
                href="mailto:mrobichaniago@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mrobichaniago@gmail.com
              </a>
            </p>
          </div>

          {/* resume  */}
          <Button
            variant="outlined"
            className="text-black font-sans dark:text-white"
          >
            <a
              href="https://drive.google.com/file/d/1qVeazI_WBheOS7Cn73VMDj4Cs-R5Qgkr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>

      {/* width 768px nav */}
      <div className={`${styles.nav} hidden md:block`}>
        <div className="flex md:flex-row justify-between items-center">
          {/* Logo / Home / Text */}

          <div className="p-1 flex justify-center items-center">
            <a href="#Home">
              {theme === "dark" ? (
                <Image
                  src="/Logo_black.png"
                  alt="LOGO"
                  width={60}
                  height={60}
                />
              ) : (
                <Image
                  src="/Logo_white.png"
                  alt="LOGO"
                  width={60}
                  height={60}
                />
              )}
            </a>
          </div>

          <nav className="space-x-4">
            <a
              href="#About"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold hover:text-[#4831d4] dark:hover:text-[#64ffda]"
            >
              <span className="dark:text-[#64ffda]">01.</span> About
            </a>
            <a
              href="#Skills"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold hover:text-[#4831d4] dark:hover:text-[#64ffda]"
            >
              <span className="dark:text-[#64ffda]">02.</span> Experience
            </a>
            <a
              href="#Work"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold hover:text-[#4831d4] dark:hover:text-[#64ffda]"
            >
              <span className="dark:text-[#64ffda]">03.</span> Work
            </a>
            <a
              href="#Contact"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold hover:text-[#4831d4] dark:hover:text-[#64ffda]"
            >
              <span className="dark:text-[#64ffda]">04.</span> Contact
            </a>

            <Button
              variant="outlined"
              className="text-black font-sans dark:text-white"
            >
              <a
                href="https://drive.google.com/file/d/1qVeazI_WBheOS7Cn73VMDj4Cs-R5Qgkr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
