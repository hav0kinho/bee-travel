import React from "react";

type Props = {
  imgSrc: string;
  country: string;
};

const CountryImage = ({ country, imgSrc }: Props) => {
  return (
    <div className="flex flex-col text-center">
      <img src={imgSrc}></img>
      <span className="text-[26px] text-primary-black max-sm:text-xl max-sm:w-auto">
        {country}
      </span>
    </div>
  );
};

export default CountryImage;
