import { memo, useEffect } from "react";
import { useSlider } from "../../hooks";

export const OnlySlider = memo(({ images, current, nextSlide }) => {

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [current]);

  const { formatNumber } = useSlider(images);
  return (
    <>
      {images.map((data, index) => (
        <div
        key={index}
        >
          <div
            className={`w-full transition-all duration-500 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            key={index}
          >
            <div className="absolute inset-0">
              <div
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
                className="absolute inset-0"
              />
              <img
                src={data.image}
                alt={data.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-semibold">{data.title}</h3>
                 <div className="absolute flex items-center left-1 top-1">  
                 <span className="pi pi-clock mr-1"></span>
                  <p className="">{data.date}</p>
                 </div>
                  <div className="flex items-center ml-1">
                    <i className="pi pi-eye pr-1" />
                    <p>{formatNumber(data.views)}</p>
                    <p className="ml-1">vistas</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});
