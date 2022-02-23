import styles from "../styles/SideNav.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

function LeftStuff() {
  return (
    <aside className={styles.LNav}>
      <p
        className={`${styles.link} hover:text-black dark:text-white hover:dark:text-[#64ffda]`}
      >
        <a
          href="mailto:mrobichaniago@gmail.com"
          target="blank"
          className="mb-2 p-2 hover:mb-4 transition-all dark:brightness-200 hover:dark:contrast-200"
        >
          <GitHubIcon />
        </a>{" "}
        <a
          href="mailto:mrobichaniago@gmail.com"
          target="blank"
          className="mb-2 p-2 hover:mb-4 transition-all dark:brightness-200 hover:dark:contrast-200"
        >
          <TwitterIcon />
        </a>{" "}
        <a
          href="mailto:mrobichaniago@gmail.com"
          target="blank"
          className="mb-2 p-2 hover:mb-4 transition-all dark:brightness-200 hover:dark:contrast-200"
        >
          <LinkedInIcon />
        </a>{" "}
        <a
          href="mailto:mrobichaniago@gmail.com"
          target="blank"
          className="p-2 hover:mb-4 transition-all dark:brightness-200 hover:dark:contrast-200"
        >
          <CodeIcon />
        </a>
      </p>
      <p className="pl-4 pt-5 font-extrabold">______________</p>
    </aside>
  );
}

export default LeftStuff;
