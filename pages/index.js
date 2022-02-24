import Head from "next/head";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import RightStuff from "../components/RightStuff";
import LeftStuff from "../components/LeftStuff";
import Work from "../components/Work";
import Mapp from "../components/Mapp";

export default function Home() {
  return (
    <div className="dark:bg-[#0a192f] bg-[#eeeee6]">
      <Head>
        <title>MRobi</title>
        <meta name="description" content="Portofolio Website by MRobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <LeftStuff />
        <RightStuff />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Mapp />
      </main>

      <footer></footer>
    </div>
  );
}
