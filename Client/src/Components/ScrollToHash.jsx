// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay thoda do taaki DOM render ho jaye
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}
