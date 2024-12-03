import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-mainColorBlue text-white p-3 rounded-full shadow-lg border-2 border-white"
      aria-label="Back to top"
    >
      <FaChevronUp size={24} className="chevron-beat" />
    </button>
  );
};

export default BackToTopButton;
