import { useState } from "react";
export const useSlider = (images, showSliders, showButton) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isMultiple, setIsMultiple] = useState(showSliders);
  const [isShowButton, setShowButton] = useState(showButton);


  const nextSlide = () => {
    let nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
    setSelected(nextIndex);
  };
  
  const prevSlide = () => {
    let prevIndex = current - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
    setCurrent(prevIndex);
    setSelected(prevIndex);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const formatNumber = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 100000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 10000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  };

  return {
    selected,
    isShowButton,
    isMultiple,
    current,
    nextSlide,
    prevSlide,
    goToSlide,
    formatNumber,
  };
};
