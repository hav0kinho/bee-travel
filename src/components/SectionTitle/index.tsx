import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="text-[56px] leading-none font-semibold text-primary-black">
      {title}
    </h2>
  );
};

export default SectionTitle;
