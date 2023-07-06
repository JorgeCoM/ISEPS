import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { NotifyContent } from "./NotifyContent";
import { NotifyHeader } from "./NotifyHeader";
import { useModal } from "../../../hooks";
import { NotifyData } from '../../../mockups/Data';
import { EmptyComponent } from "../../EmptyComponent"

export const NotifyComponent = () => {
  const { showContainer, toggleContainer, containerRef, buttonRef } = useModal();

  const mockupNotify = NotifyData || []

  return (
    <div className="relative">
      <Button
        rounded
        text
        severity="info"
        className="p-button-rounded p-button-outlined"
        icon={"pi pi-bell"}
        onClick={toggleContainer}
        ref={buttonRef}
      />
      <Badge
        style={{
          width: "19px",
          height: "19px",
          fontSize: "15px",
          color: 'red',
          backgroundColor: 'transparent'
        }}
        className="absolute font-bold left-[22px]"
        value="3"
      ></Badge>
      {showContainer && (
        <div
          ref={containerRef}
          className="flex flex-col overflow-auto border rounded-md bg-white mt-4 absolute right-0"
          style={{ width: "300px", height: "350px", zIndex: 1000 }}
        >
          <NotifyHeader toggleContainer={toggleContainer} />
          <div className="flex-grow scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 dark:bg-gray-700 overflow-auto">
            {mockupNotify.length > 0 ? 
              mockupNotify.map((e, i) => <NotifyContent key={i} data={e} />)
              :
              <EmptyComponent />}
          </div>
        </div>
      )}
    </div>
  );
};
