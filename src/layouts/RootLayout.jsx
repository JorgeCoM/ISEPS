import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { CalenderComponent, HeaderComponent, SliderComponent, BreadCrumbComponent } from "../components";
import { SliderData } from "../mockups/Data";

const mockupSlider = {
  images: SliderData,
  showSliderMultiple: false,
  showButton: false
};

export const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <header className="block border-b-[1px] border-gray-300 h-[60px]">
          <HeaderComponent />
        </header>
        <div className="flex-1 bg-gray-200 overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 dark:bg-gray-700 ">
          <div className="h-[500px]">
              <BreadCrumbComponent />
            <Outlet />
          </div>
        </div>
      </main>
      <div className="border-l-[1px] bg-white border-white-300 w-[300px]">
        <div className="px-2 pt-3 mb-2">
        <SliderComponent mockupSlider={mockupSlider} />
        </div>
        <div className="px-2 bg-white">
          <CalenderComponent/>
        </div>
      </div>
    </div>
  );
};
