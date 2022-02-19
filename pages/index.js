import Head from "next/head";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="dark:bg-[#0a192f]">
      <Head>
        <title>MRobi</title>
        <meta name="description" content="Portofolio Website by MRobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Hero />
      </main>

      <footer></footer>
    </div>
  );
}
