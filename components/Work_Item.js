import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Work.module.css";
import LinkIcon from "@mui/icons-material/Link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
        className={`${colStyle1} relative w-full h-[420px] sm:h-[370px]`}
      >
        <Image
          src={image}
          alt="projects"
          layout="fill"
          className="lg:grayscale lg:hover:grayscale-0 transition"
        />
      </a>

      {/* under w-[1024px] description  */}
      <div className="lg:hidden absolute right-0 top-0 h-[420px] sm:h-[370px] h w-full flex justify-center items-center bg-[#112240e1] shadow-slate-500 shadow-md ">
        <div className="w-5/6 h-5/6 ">
          <p className="text-[#64ffda] text-sm sm:text-base">
            Featured Project
          </p>
          <h4 className="text-xl sm:text-2xl mb-6 text-white font-sans font-bold">
            {workName}
          </h4>
          {/* description  */}

          <h5 className="text-sm sm:text-base text-white font-medium font-sans mb-3 sm:mb-6">
            {desc}
          </h5>

          <div className="flex justify-between sm:block">
            <ul className="sm:flex sm:flex-wrap sm:gap-4 sm:mb-6">
              {tech.map((list) => (
                <li
                  key={Math.random()}
                  className="text-sm font-extrabold text-white mb-[4px]"
                >
                  <ArrowRightIcon />
                  {list}
                </li>
              ))}
            </ul>

            <ul className="sm:flex sm:gap-4">
              {/* ghub  */}
              <li className="mb-4">
                <a
                  href={ghub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all brightness-200 hover:contrast-200"
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
                  className="transition-all brightness-200 hover:contrast-200"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
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
              className="transition-all brightness-200 hover:dark:contrast-200"
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
