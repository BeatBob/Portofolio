import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Work.module.css";
import LinkIcon from "@mui/icons-material/Link";

function Work_Item({
  link,
  image,
  workName,
  desc,
  tech,
  ghub,
  colStyle1,
  colStyle2,
  techStyle,
  textDirection,
  float,
}) {
  return (
    <li className="w-full grid grid-cols-12 relative mb-20">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${colStyle1} relative w-full h-[370px]`}
      >
        <Image
          src={image}
          alt="projects"
          layout="fill"
          className="lg:grayscale lg:hover:grayscale-0 transition"
        />
      </a>

      {/* under w-[1024px] description  */}
      <div className="lg:hidden absolute right-0 top-0 h-[370px] w-full bg-[#0a192f9a] shadow-slate-500 shadow-md ">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          repellat quisquam explicabo illum, nostrum atque beatae rem suscipit
          accusamus vel illo molestias voluptate? Voluptate dolores illo
          temporibus nemo earum maiores.
        </p>
      </div>

      {/* w-[1024px] description  */}
      <div
        className={`${colStyle2} hidden lg:block absolute right-0 top-5 font-bold`}
      >
        <p className={textDirection}>Featured Project</p>
        <h4
          className={`${textDirection} text-2xl mb-6 text-black dark:text-white`}
        >
          {workName}
        </h4>
        {/* description  */}
        <div
          className={`${styles.desc} bg-[#112240] mb-5 flex justify-center items-center p-4`}
        >
          <p className={`${textDirection} text-white font-medium font-sans`}>
            {desc}
          </p>
        </div>

        <ul className={techStyle}>
          {tech.map((list) => (
            <li
              key={Math.random()}
              className="text-sm font-extrabold text-black dark:text-white"
            >
              {list}
            </li>
          ))}
        </ul>

        <ul className={`flex ${float} gap-4`}>
          {/* ghub  */}
          <li>
            <a
              href={ghub}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all dark:brightness-200 hover:dark:contrast-200"
            >
              <GitHubIcon />
            </a>
          </li>
          {/* link  */}
          <li>
            <a
              href={link}
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
  );
}

export default Work_Item;
