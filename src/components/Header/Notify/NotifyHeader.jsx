import { Button } from "primereact/button";

export const NotifyHeader = ({ toggleContainer }) => {
  return (
    <div className="w-full mb-6 h-8">
      <div className="flex border-gray-300 border-b-[1px] w-full items-center justify-between">
        <div className="px-2">
          <Button
            onClick={toggleContainer}
            icon="pi pi-times"
            rounded
            text
            severity="danger"
            aria-label="Cancel"
          />
        </div>
        <div className="px-2">
          <p className=" font-bold">notificaciones</p>
        </div>
      </div>
    </div>
  );
};
