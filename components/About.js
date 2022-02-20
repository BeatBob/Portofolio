import styles from "../styles/About.module.css";
import Image from "next/image";

function About() {
  return (
    <section className="max-w-5xl min-h-screen mx-auto mt-32 ">
      <div className="font-bold w-full flex h-10">
        <h2 className="min-w-[200px]">
          <span className="text-xl">01. </span>
          <span className="font-sans text-3xl dark:text-white">About Me</span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-80 self-center "></span>
      </div>

      <div className="grid grid-cols-2">
        <div className="relative">
          <div className="">
            <p className="text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa]">
              Hello! My name is M.Robi, a self-taught Front-end Developer and I
              enjoy creating things that live on the internet. My interest in
              web development started back in November 2020 when I decided to
              learn about Digital Marketing — turns out i got an interest in web
              development.
            </p>
            <p className="text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa]">
              I learned a lot from the sources available on the internet such as
              FreeCodeCamp, Youtube, Stack Overflow, etc - and it taught me a
              lot about HTML, CSS, javascript and it Frameworks!
            </p>
            <p className="text-lg font-semibold mt-6 opacity-80 dark:text-[#f0f2fa]">
              Fast-forward to today, I want to take a bigger step and start a
              new career in Web Development.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className={styles.picture}>
            <Image
              src="/MRobi.png"
              alt="Robi's Picture"
              layout="fill"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
