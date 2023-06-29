import { useState, useEffect } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";

const GoTop = () => {
  const [hidden, setHidden] = useState(true);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    });
  }, []);

  return (
    <>
      {!hidden && (
        <button
          onClick={goToTop}
          className="fixed bottom-4 right-4 text-violet-600 duration-150 hover:text-violet-500"
          aria-label="go to top"
        >
          <RiArrowUpCircleFill className="h-12 w-12" />
        </button>
      )}
    </>
  );
};

export default GoTop;
