import { useTheme } from "next-themes";
import styles from "../styles/NavBar.module.css";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div className={styles.nav}>
      <div className="flex md:flex-row justify-between items-center">
        {/* Logo / Home / Text */}

        <div className="p-1 flex justify-center items-center">
          <a href="#Home">
            {theme === "dark" ? (
              <Image src="/Logo_black.png" alt="LOGO" width={60} height={60} />
            ) : (
              <Image src="/Logo_white.png" alt="LOGO" width={60} height={60} />
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
  );
}
