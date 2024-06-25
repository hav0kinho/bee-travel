import React from "react";
import PaperPlane from "../../assets/PaperPlane.svg";

const ContactEmail = () => {
  return (
    <form>
      <div className="flex text-center justify-center items-center">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[490px] h-[60px] py-6 px-10 rounded-xl  mr-6"
        />
        <button className="w-[60px] h-[60px] bg-primary-orange rounded-xl">
          <img src={PaperPlane} alt="Avião de papel" />
        </button>
      </div>
    </form>
  );
};

export default ContactEmail;
