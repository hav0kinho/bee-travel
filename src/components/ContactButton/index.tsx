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
      className="text-primary-orange border-2 border-primary-orange rounded-full w-[184px] h-[54px]"
    >
      Contact Now
      <img
        src={paperPlaneIcon}
        alt="Icone Paper Plane"
        className="inline ml-2"
      />
    </button>
  );
};

export default ContactButton;
