import React from "react";

type Props = {
  link: string;
  text: string;
};

const FooterLink = ({ link, text }: Props) => {
  return (
    <li className="my-3">
      <a href={link} className="text-sm text-primary-gray">
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
