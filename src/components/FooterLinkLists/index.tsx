import React from "react";
import FooterLink from "../FooterLink";

export type LinkListProps = {
  title: string;
  links: {
    text: string;
    link: string;
  }[];
};

type Props = {
  linkLists: LinkListProps[];
};
/*
const FooterLinkLists = ({ linkList }: Props) => {
  return (
    <div>
      <div></div>
      <h4 className="text-lg font-medium mb-6">Resources</h4>
      <div className="text-sm">
        <ul>
          <FooterLink link="#" text="Download" />
          <FooterLink link="#" text="Help Center" />
          <FooterLink link="#" text="Guide Book" />
          <FooterLink link="#" text="App Directory" />
        </ul>
      </div>
    </div>
  );
};
*/

const FooterLinkLists = ({ linkLists }: Props) => {
  console.log(linkLists);
  return (
    <div className="flex justify-between">
      {linkLists.map((linkList) => (
        <div>
          <h4 className="text-lg font-medium mb-6">{linkList.title}</h4>
          <div className="text-sm">
            <ul>
              {linkList.links.map((link) => (
                <FooterLink link={link.link} text={link.text} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinkLists;
