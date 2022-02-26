import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className="flex md:flex-row justify-between items-center">
        {/* Logo / Home / Text */}

        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-pink-600 font-sans">
                M.Robi
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-blue-400 font-sans">
                Front-end Developer
              </p>
            </a>
          </Link>
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
  );
}
