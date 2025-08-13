import { useEffect } from "react";

const DisableCopy = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && (event.key === "c" || event.key === "x" || event.key === "p")) {
        event.preventDefault();
      }
    });
  }, []);

  return null;
};

export default DisableCopy;
