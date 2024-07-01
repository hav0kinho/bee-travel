import Facebook from "../../assets/Facebook.svg";
import Instragram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";

type Props = {
  logo: "facebook" | "instagram" | "twitter";
};

const SocialButton = ({ logo }: Props) => {
  let logoImg = "";
  let size = "4";
  switch (logo) {
    case "facebook":
      logoImg = Facebook;
      break;
    case "instagram":
      logoImg = Instragram;
      size = "6";
      break;
    case "twitter":
      logoImg = Twitter;
      size = "6";
      break;
  }
  return (
    <button className="w-8 h-8 rounded-full border-[1px] border-primary-black max-sm:w-16 max-sm:h-16">
      <img
        src={logoImg}
        alt={`${logo} logo`}
        className={`mx-auto max-sm:w-${size}`}
      />
    </button>
  );
};

export default SocialButton;
