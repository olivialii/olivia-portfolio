import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export const setWhiteBackground = () => {
    document.body.style.background = "#ffffff";
  };
  
export const defaultBackground = () => {
    document.body.style.backgroundColor = "#ffffff";
    //document.body.style.backgroundImage = 'url("../assets/background.png")';
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "70vw";
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
};

