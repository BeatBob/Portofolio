import { useTheme } from "next-themes";
import styles from "../styles/NavBar.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

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
        className={`${dash} fixed top-0 right-0 flex h-screen md:hidden z-20 drop-shadow-xl`}
      >
        <div
          onClick={menuOpen}
          className={`${back} w-12 h-12 bg-stone-50 flex justify-center  items-center cursor-pointer`}
        >
          <MenuOpenIcon className="scale-150" />
        </div>
        <div className="w-64 -mt-4 right-0 bg-rose-100 flex flex-col justify-around"></div>
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

          <nav className="space-x-4 hidden md:block ">
            <a
              href="#About"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold"
            >
              <span className="dark:text-[#64ffda]">01.</span> About
            </a>
            <a
              href="#Skills"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold"
            >
              <span className="dark:text-[#64ffda]">02.</span> Experience
            </a>
            <a
              href="#Work"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold"
            >
              <span className="dark:text-[#64ffda]">03.</span> Work
            </a>
            <a
              href="#Contact"
              className="text-gray-600 dark:text-gray-300 text-sm font-bold"
            >
              <span className="dark:text-[#64ffda]">04.</span> Contact
            </a>

            <Button
              variant="outlined"
              className="text-black font-sans dark:text-white"
            >
              <a href="#">Resume</a>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
