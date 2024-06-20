import React from "react";
import ContactButton from "../ContactButton";
import HeroImage from "../../assets/imagens/Hero_Image.png";
import CountryImage from "../CountryImage";
import PortugalImage from "../../assets/imagens/portugal.png";
import FranceImage from "../../assets/imagens/france.png";
import SpainImage from "../../assets/imagens/spain.png";
import ItalyImage from "../../assets/imagens/italy.png";
import NetherlandsImage from "../../assets/imagens/netherlands.png";
import GermanyImage from "../../assets/imagens/germany.png";

const Main = () => {
  return (
    <main className="my-12 ">
      <section className="flex justify-between h-[598px] ">
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
      <section className="h-[492px] flex flex-col justify-between">
        <h2 className="text-[56px] font-semibold text-primary-black">
          Countries
        </h2>
        <p className="max-w-[520px] text-primary-gray">
          BeesTravel offers great deals for you. You can easily travel and
          explore over 10+ europen countries with one simple touch.
        </p>
        <div className="flex justify-between">
          <CountryImage country="Portugal" imgSrc={PortugalImage} />
          <CountryImage country="France" imgSrc={FranceImage} />
          <CountryImage country="Spain" imgSrc={SpainImage} />
          <CountryImage country="Italy" imgSrc={ItalyImage} />
          <CountryImage country="Netherlands" imgSrc={NetherlandsImage} />
          <CountryImage country="Germany" imgSrc={GermanyImage} />
        </div>
      </section>
    </main>
  );
};

export default Main;
