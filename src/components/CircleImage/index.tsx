import React from "react";

type Props = {
  image: string;
};

const CircleImage = ({ image }: Props) => {
  return (
    <div>
      <img
        src={image}
        className="rounded-full object-cover w-[578px] h-[578px] max-sm:max-w-full max-sm:h-80"
      />
    </div>
  );
};

export default CircleImage;
