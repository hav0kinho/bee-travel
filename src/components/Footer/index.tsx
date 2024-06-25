import Logo from "../../assets/Logo.svg";
import FooterLink from "../FooterLink";
import FooterLinkLists, { LinkListProps } from "../FooterLinkLists";
import SocialButton from "../SocialButton";

const linkList: LinkListProps[] = [
  {
    title: "Resources",
    links: [
      {
        text: "Download",
        link: "#",
      },
      {
        text: "Help Center",
        link: "#",
      },
      {
        text: "Guide Book",
        link: "#",
      },
      {
        text: "App Directory",
        link: "#",
      },
    ],
  },
  {
    title: "Travellers",
    links: [
      {
        text: "Advantages",
        link: "#",
      },
      {
        text: "Offers",
        link: "#",
      },
      {
        text: "Customer Stories",
        link: "#",
      },
      {
        text: "Specials",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        text: "Travelling",
        link: "#",
      },
      {
        text: "Offices",
        link: "#",
      },
      {
        text: "Success",
        link: "#",
      },
      {
        text: "Information",
        link: "#",
      },
    ],
  },
  {
    title: "Our App",
    links: [
      {
        text: "App Store",
        link: "#",
      },
      {
        text: "Google Play Store",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-between mt-48">
      <div className="flex flex-col justify-between max-w-32">
        <div>
          <img src={Logo} alt="Logo da Bee Travel" />
          <div className="py-7">
            <span className="text-primary-gray">Top 3 in the World</span>
          </div>
        </div>
        <div className="flex justify-between">
          <SocialButton logo="facebook" />
          <SocialButton logo="instagram" />
          <SocialButton logo="twitter" />
        </div>
      </div>
      <nav className="w-full max-w-3xl">
        <FooterLinkLists linkLists={linkList} />
      </nav>
    </footer>
  );
};

export default Footer;
