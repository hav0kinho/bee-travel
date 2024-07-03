import { MouseEvent } from "react";
import paperPlaneIcon from "../../assets/PaperAirplane.svg";
import useScrollToId from "../../util/hooks/useScrollToId";

type Props = {
  goto?: string;
};

const ContactButton = ({ goto = "contact" }: Props) => {
  const scrollToId = useScrollToId(goto);

  return (
    <button
      onClick={scrollToId}
      type="button"
      className="group text-primary-orange border-2 border-primary-orange rounded-full w-[184px] h-[54px] hover:bg-primary-orange hover:text-white hover:transition-all hover:duration-300"
    >
      <span>Contact Now</span>
      <img
        src={paperPlaneIcon}
        alt="Icone Paper Plane"
        className="group-hover:hidden hover:duration-0 inline ml-2"
      />
    </button>
  );
};

export default ContactButton;
