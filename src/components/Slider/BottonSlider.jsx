import { Button } from "primereact/button";

export const BottonSlider = ({ nextSlide, prevSlide }) => {
  return (
    <div className="flex">
      <div className="px-2">
        <Button
          outlined
          rounded
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "transparent",
            color: "black",
            padding: "0 5px",
          }}
          className="p-button-rounded mr-2 p-button-secondary"
          icon="pi pi-chevron-left"
          onClick={prevSlide}
        />
      </div>
<div>
<Button
        outlined
        rounded
        style={{
          width: "35px",
          height: "35px",
          backgroundColor: "transparent",
          color: "black",
        }}
        className="p-button-rounded p-button-secondary"
        icon="pi pi-chevron-right"
        onClick={nextSlide}
      />
</div>
    </div>
  );
};
