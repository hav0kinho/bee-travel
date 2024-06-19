import paperPlaneIcon from "../../assets/PaperAirplane.svg";

const ContactButton = () => {
  return (
    <button className="text-primary-orange border-2 border-primary-orange rounded-full w-[184px] h-[54px]">
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
