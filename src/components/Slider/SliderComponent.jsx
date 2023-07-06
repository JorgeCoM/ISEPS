import { useSlider } from "../../hooks";
import { BarSlider } from "./BarSlider";
import { MultipleSlider } from "./MultipleSlider";
import { OnlySlider } from "./OnlySlider";

export const SliderComponent = ({ mockupSlider = [] }) => {
  const { images, showSliderMultiple, showButton, titleSlider } = mockupSlider;
  const dataImg = images || [];

  const {
    current,
    goToSlide,
    nextSlide,
    prevSlide,
    isMultiple,
    isShowButton,
    selected,
  } = useSlider(dataImg, showSliderMultiple, showButton);

  return (
    <div className="relative w-full overflow-hidden">
      {isMultiple ? (
        <div className=" relative h-[300px] w-full overflow-hidden">
          <MultipleSlider
          selected={selected}
          title={titleSlider}
          images={dataImg}
          current={current}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
        </div>
      ) : (
        <div className="min-h-[210px]">
          <OnlySlider images={dataImg} nextSlide={nextSlide} current={current} />
        </div>
      )}
      {isShowButton ? (
        <></> 
      ) : (
        <BarSlider data={dataImg} current={current} goToSlide={goToSlide} />
      )}
    </div>
  );
};
