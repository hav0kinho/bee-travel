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
import DestinationCard from "../DestinationCard";
import SectionTitle from "../SectionTitle";
import DestinationImage from "../DestinationImage";
import ManImage from "../../assets/imagens/man.jpg";
import CircleImage from "../CircleImage";
import StarSVG from "../../assets/Star.svg";
import ContactEmail from "../ContactEmail";

const Main = () => {
  return (
    <main className="my-12 ">
      <section className="flex my-12 justify-between h-[598px] ">
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
      <section className="h-[492px] flex mb-32 flex-col justify-between">
        <SectionTitle title="Countries" />
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
      <section className="flex justify-between mb-32">
        <div>
          <DestinationImage />
        </div>
        <div className="flex flex-col justify-around max-w-[538px] h-[514px] ">
          <strong className="text-primary-orange text-xl">
            Destination Points
          </strong>
          <SectionTitle title="Our Stories Have Adventures" />
          <p className="text-primary-gray">
            We are experienced in bringing adventures to stay their journey,
            with all outdoor destinations in the world as our specialties. Start
            your adventure now! Nature has already called you!
          </p>
          <div className="flex justify-between">
            <DestinationCard title="European Contries" value="10+" />
            <DestinationCard title="Worldwide Offices" value="40+" />
            <DestinationCard title="Happy Customers" value="20k+" />
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center mb-32">
        <div className="max-w-[537px] ">
          <SectionTitle title="What Customers Think About Us:" />
          <div className="bg-primary-white text-primary-gray p-6 rounded-[14px] mt-7">
            <p className="text-primary-gray mb-7">
              BeeTravel helped to see great places with the great offers. The
              company also assure you to refund your money anytime. Easy to
              communicate easy to explore. Thank you.
            </p>
            <div className="flex flex-col justify-between w-[120px] h-[74px]">
              <div className="flex">
                <img src={StarSVG} alt="Estrela" />
                <img src={StarSVG} alt="Estrela" />
                <img src={StarSVG} alt="Estrela" />
                <img src={StarSVG} alt="Estrela" />
                <img src={StarSVG} alt="Estrela" />
              </div>
              <div>
                <div>
                  <span className="text-xl font-medium text-primary-black">
                    Josh Stone
                  </span>
                </div>
                <div>
                  <span className="text-xs">Traveler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CircleImage image={ManImage} />
      </section>
      <section className="flex flex-col max-w-[924px] m-auto text-center">
        <SectionTitle title="Contact With us to be informed about news" />
        <div className="max-w-[647px] mt-10 mx-auto">
          <span className="text-[28px] text-primary-gray">
            Recieve latest news, update, and many other things every week.{" "}
          </span>
        </div>
        <div className="mt-10">
          <ContactEmail />
        </div>
      </section>
    </main>
  );
};

export default Main;
