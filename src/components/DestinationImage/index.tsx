import React from "react";

import StoriesMuseumImage from "../../assets/imagens/Destination Image.png";

type Props = {};

const DestinationImage = (props: Props) => {
  return <img src={StoriesMuseumImage} className="max-w-[578px]" />;
};

export default DestinationImage;
