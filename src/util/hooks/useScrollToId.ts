import { MouseEventHandler } from "react";

const useScrollToId = (id: string) => {
  const scrollToId = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToId;
};

export default useScrollToId;
