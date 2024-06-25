import Facebook from "../../assets/Facebook.svg";
import Instragram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";

type Props = {
  logo: "facebook" | "instagram" | "twitter";
};

const SocialButton = ({ logo }: Props) => {
  let logoImg = "";
  switch (logo) {
    case "facebook":
      logoImg = Facebook;
      break;
    case "instagram":
      logoImg = Instragram;
      break;
    case "twitter":
      logoImg = Twitter;
      break;
  }
  return (
    <button className="w-8 h-8 rounded-full border-[1px] border-primary-black">
      <img src={logoImg} alt={`${logo} logo`} className="mx-auto" />
    </button>
  );
};

export default SocialButton;
