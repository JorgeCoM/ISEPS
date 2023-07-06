import { useState, useEffect } from "react";
import { BottonSlider } from "./BottonSlider";
import { MultipleSliderContent } from "./MultipleSliderContent";

export const MultipleSlider = ({ images = [], prevSlide, nextSlide, title, current }) => {

  const savedIsFord = localStorage.getItem('open');
  const [isFord, setIsFord] = useState(savedIsFord !== null ? savedIsFord === 'true' : true);

  const baseIndex = isFord ? Math.floor(current / 3) * 3 : Math.floor(current / 4) * 4;

  const indices = isFord
    ? [baseIndex, baseIndex + 1, baseIndex + 2].map((index) => index % images.length)
    : [baseIndex, baseIndex + 1, baseIndex + 2, baseIndex + 3].map((index) => index % images.length); 

 const [showButton, setshowButton] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const savedIsFord = localStorage.getItem('open');
      setIsFord(savedIsFord !== null ? savedIsFord === 'true' : true);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (images.length > 4) {
      setshowButton(true)
    } else {
      setshowButton(false)
    }
  }, [indices])

  return (
    <div className="w-full flex flex-col">
      <div className="relative items-center p-2 mb-2 w-full h-[50px] flex justify-between">
        <h2 className="font-bold">{title}</h2>
        {showButton ? <BottonSlider prevSlide={prevSlide} nextSlide={nextSlide} /> : <></>}
      </div>
      <div className="flex w-full p-2 justify-between">
        {indices.map((index) => (
          <MultipleSliderContent selected={showButton ? index === current : false} key={index} data={images[index]} />
        ))}
      </div>
    </div>
  );
};
