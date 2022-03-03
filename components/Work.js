import Work_Item from "./Work_Item";

function Work() {
  return (
    <section
      aria-label="Work"
      className="max-w-lg lg:max-w-4xl xl:max-w-5xl min-h-screen mx-auto pt-24"
      id="Work"
    >
      <header className="font-bold w-4/5 sm:w-full flex h-10 mb-10 mx-auto">
        <h2 className="min-w-[250px] sm:pr-5 ">
          <span className="text-base sm:text-xl text-black dark:text-[#4831d4]">
            03.{" "}
          </span>
          <span className="font-sans text-2xl lg:text-3xl dark:text-white">
            Some Things I&apos;ve Built
          </span>
        </h2>
        <span className="block h-[2px] bg-[#4831d4] w-4/12 self-center"></span>
      </header>

      {/* projects list  */}
      <ul className="w-4/5 sm:w-full mx-auto">
        {/* Kicks  */}
        <Work_Item
          link="https://kicks-commerce.web.app/"
          image="/Kicks_shop.png"
          workName="Kicks eCommerce"
          desc="An eCommerce website selling Nike products. Responsive & easy to
                use. Log-in, select the item you want to buy, set the quantity
                of the item you choose, you can see a list of the item you
                selected in the shopping cart."
          tech={[
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Firebase",
            "Material UI",
          ]}
          ghub="https://github.com/BeatBob/Kicks-eCommerce"
          colStyle1="col-start-1 col-end-13 lg:col-start-1 lg:col-end-9"
          colStyle2="col-start-8 col-end-13"
          techStyle="flex gap-4 flex-wrap justify-end w-10/12 ml-auto mb-4"
          textDirection="text-right"
          float="float-right"
        />

        {/* Airbnb clone  */}
        <Work_Item
          link="https://airbnb-clone-next-brown.vercel.app/"
          image="/AirBnb_Clone.png"
          workName="Airbnb Clone"
          desc="AirBnb clone website that allowed you to set destination, date
          range, number of guests."
          tech={["React", "Tailwind CSS", "NextJS", "MapBox"]}
          ghub="https://github.com/BeatBob/Airbnb-clone-next"
          colStyle1="col-start-1 col-end-13 lg:col-start-5 lg:col-end-13"
          colStyle2="col-start-1 col-end-6"
          techStyle="flex gap-4 flex-wrap w-10/12 mb-4"
          textDirection="text-left"
        />

        {/* Rock-Paper-Scissors game  */}
        <Work_Item
          link="https://rps-the-games.netlify.app/"
          image="/RPS_Game.png"
          workName="Rock-Paper-Scissors game"
          desc="A Rock-Paper-Scissors game created using vanilla JavaScript &
          CSS. Choose your hand and play the game againts computer."
          tech={["Javascript", "CSS"]}
          ghub="https://github.com/BeatBob/Rock-Paper-scissors"
          colStyle1="col-start-1 col-end-13 lg:col-start-1 lg:col-end-9"
          colStyle2="col-start-8 col-end-13"
          techStyle="flex gap-4 flex-wrap justify-end w-10/12 ml-auto mb-4"
          textDirection="text-right"
          float="float-right"
        />
      </ul>
    </section>
  );
}

export default Work;
