import React from "react";
import ContactButton from "../ContactButton";
import HeroImage from "../../assets/imagens/Hero_Image.png";

const Main = () => {
  return (
    <main className="h-[598px] my-12 ">
      <section className="flex justify-between">
        <div className="w-[577px]">
          <h1 className="text-[84px] font-bold leading-none text-primary-black">
            Explore the Best Place Now
          </h1>
          <p className="my-6 text-primary-gray">
            Plan your schedule and start to explore world. BeeTravel helps you
            to get great offers. For more offer you can alway contact with us
          </p>
          <ContactButton />
        </div>
        <div>
          <img src={HeroImage} className="" alt="Homem segurando uma câmera" />
        </div>
      </section>
    </main>
  );
};

export default Main;
