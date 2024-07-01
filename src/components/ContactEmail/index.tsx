import React from "react";
import PaperPlane from "../../assets/PaperPlane.svg";

const ContactEmail = () => {
  return (
    <form>
      <div className="flex text-center justify-center items-center max-sm:flex-col border-2 border-red-500">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[490px] h-[60px] py-6 px-10 rounded-xl  mr-6 max-sm:w-full max-sm:mr-0 max-sm:text-center"
        />
        <button className="w-[60px] h-[60px] bg-primary-orange rounded-xl max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center max-sm:mt-3">
          <strong className="hidden max-sm:inline max-sm:text-2xl max-sm:text-white">
            Send Mail
          </strong>
          <img src={PaperPlane} alt="Avião de papel" className="" />
        </button>
      </div>
    </form>
  );
};

export default ContactEmail;
