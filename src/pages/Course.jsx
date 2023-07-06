import { SliderComponent } from "../components/Slider/SliderComponent";
import { SliderMultipleData, TrendSlider } from "../mockups/Data";

const mockupSlider = {
  images: TrendSlider,
  showSliderMultiple: true,
  showButton: true,
  titleSlider: "Cursos recomendados",
};

const mockupSlider2 = {
  images: SliderMultipleData,
  showSliderMultiple: true,
  showButton: true,
  titleSlider: "Todos los cursos",
};


export const Course = () => {
  return (
    <div className="px-4 flex flex-col">
            <div className="w-full">
        <SliderComponent mockupSlider={mockupSlider} />
      </div>
      <div className="w-full">
        <SliderComponent mockupSlider={mockupSlider2} />
      </div>
    </div>
  )
}