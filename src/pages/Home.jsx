import { SliderComponent } from "../components/Slider/SliderComponent";
import { SliderMultipleData } from "../mockups/Data";
import { RecordatorioData } from "../mockups/Data";
import { Button } from "primereact/button";
import { ReminderComponent } from "../components";
import { EmptyComponent } from "../components/EmptyComponent";

const mockupSlider = {
  images: SliderMultipleData,
  showSliderMultiple: true,
  showButton: true,
  titleSlider: "Cursos recomendados",
};

const reminder = RecordatorioData || []

export const Home = () => {
  const redirectToUrl = () => {
    window.location.href = "/calendar";
}
  return (
    <div className="px-4 flex flex-col">
      <div className="w-full">
        <SliderComponent mockupSlider={mockupSlider} />
      </div>
      <div className="w-full p-2 h-[275px] mb-2">
        <div className="flex h-full w-full flex-grow flex-col">
          <div className="flex pb-2 justify-between items-center">
            <p className=" font-bold">Recordatorios</p>
            <Button
              onClick={redirectToUrl}
              rounded
              text
              severity="info"
              className="p-button-rounded p-button-outlined"
            >
              Ver todos
            </Button>
          </div>
          {reminder.length > 0 ? 
              reminder.map((e, i) => <ReminderComponent key={i} data={e} />) 
              : <EmptyComponent />}
        </div>
      </div>
    </div>
  );
};
