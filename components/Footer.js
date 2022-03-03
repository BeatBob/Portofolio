function Footer() {
  return (
    <footer className="max-w-5xl m-auto">
      <div className="font-sans font-bold sm:flex justify-center m-auto w-2/4 text-center py-4">
        <p className="pr-2 dark:text-white">&copy;2022</p>
        <span className="hidden sm:inline-block font-bold dark:text-white">
          |
        </span>
        <h6 className="ml-2 dark:text-white">
          Coded by{" "}
          <a
            href="https://github.com/BeatBob"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            BeatmBob
          </a>{" "}
          (aka M.Robi){" "}
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
