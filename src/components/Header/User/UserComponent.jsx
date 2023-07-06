import { Button } from "primereact/button";
import { UserContent } from "./UserContent";
import { useModal } from "../../../hooks";

export const UserComponent = () => {
  const { showContainer, toggleContainer, containerRef, buttonRef } =
    useModal();

  return (
    <div className="relative">
     <Button
      icon=""
      onClick={toggleContainer}
      rounded
      text
      ref={buttonRef}
      severity="info"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "100%", // Ajusta el valor del borderRadius para hacerlo redondo
        backgroundImage:
          "url(https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="absolute bottom-[-3px]"
    />

      {showContainer && (
        <div
          ref={containerRef}
          className="overflow-auto border rounded-md bg-white mt-4 absolute top-[48px] right-0"
          style={{ minWidth: '230px', minHeight: '170px', zIndex: '1000' }}
        >
          <div className="h-full">
            <div className="w-full h-full">
              <UserContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
