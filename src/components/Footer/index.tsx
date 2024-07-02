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
      <div className="flex flex-col justify-between max-w-32 max-sm:max-w-none max-sm:w-full">
        <div className="max-sm:flex max-sm:justify-between">
          <img src={Logo} alt="Logo da Bee Travel" />
          <div className="py-7 max-sm:p-0">
            <span className="text-primary-gray max-sm:text-xl">
              Top 3 in the World
            </span>
          </div>
        </div>
        <div className="max-sm:flex max-sm:justify-between max-sm:mt-3">
          <SocialButton logo="facebook" />
          <SocialButton logo="instagram" />
          <SocialButton logo="twitter" />
        </div>
      </div>
      <nav className="w-full max-w-3xl max-sm:hidden">
        <FooterLinkLists linkLists={linkList} />
      </nav>
    </footer>
  );
};

export default Footer;
