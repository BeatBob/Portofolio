import styles from "../styles/SideNav.module.css";

function RightStuff() {
  return (
    <aside className={styles.RNav}>
      <p
        className={`${styles.link} hover:text-black dark:text-white hover:dark:text-[#64ffda]`}
      >
        <a href="mailto:mrobichaniago@gmail.com" target="blank">
          mrobichaniago@gmail.com
        </a>
      </p>
      <p className="pl-[6px] pt-5 font-extrabold">______________</p>
    </aside>
  );
}

export default RightStuff;