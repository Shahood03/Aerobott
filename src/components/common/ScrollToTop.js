// ScrollToTop.js - Create this file in your components/common folder
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" for smooth scrolling animation
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;