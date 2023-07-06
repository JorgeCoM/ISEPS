import { Button } from "primereact/button";

export const Admission = ({handleClickClosed}) => {
  return (
      <div>
        <div className="w-full h-[346px]">
          <div className="flex flex-col">
            <div className="w-full flex mb-4 rounded-md bg-white justify-between items-center">
              <h2 className="font-bold pl-2">Admisión</h2>
              <Button
                onClick={handleClickClosed}
                icon="pi pi-times"
                rounded
                text
                severity="danger"
                aria-label="Cancel"
              />
            </div>
            <div className="w-full h-[30px] mb-2 flex justify-between">
              <div>
                <p>Examen de admisión:</p>
              </div>
              <div>
                <p className="font-bold">RD$500.00</p>
              </div>
            </div>
            <div className="w-full h-[30px] mb-2 flex justify-between">
              <div>
                <p>Examen de admisión:</p>
              </div>
              <div>
                <p className="font-bold">RD$500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
