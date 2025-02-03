  export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

  export const setWhiteBackground = () => {
    document.body.style.background = "#ffffff";
  };

  export const defaultBackground = () => {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.backgroundImage = 'url("../assets/background.png")';
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "0 0";
    document.body.style.backgroundSize = "contain";
  };
  