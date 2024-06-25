import React from "react";

type Props = {
  image: string;
};

const CircleImage = ({ image }: Props) => {
  return (
    <div>
      <img
        src={image}
        className="rounded-full object-cover w-[578px] h-[578px]"
      />
    </div>
  );
};

export default CircleImage;
