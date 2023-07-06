import { Avatar } from "primereact/avatar";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

export const ReminderComponent = ({data = []}) => {
    const {image, title, desciption, date} = data

  return (
    <>
      <div className="flex rounded-md justify-between mb-2 bg-white items-center">
        <div className="flex p-2">
          <Avatar
            image={image}
            size="large"
            shape="circle"
            className="mr-3"
          />
          <div className="flex relative top-[10px] text-[10px] flex-col">
            <p>{title}</p>
            <p className="font-bold">{desciption.length > 50 ? `${desciption.slice(0, 50)}...` : desciption}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex pr-2 w-[180px] justify-content-center">
            <Calendar
              showIcon={true}
              dateFormat="dd/mm/yy"
              value={date}
              disabled={title == 'Grupo de estudio' ? false : true}
              icon="pi pi-calendar"
            />
          </div>
          <div className=" pr-2">
            <Button
              icon="pi pi-arrow-right"
              rounded
              text
              severity="info"
              aria-label="User"
            />
          </div>
        </div>
      </div>
    </>
  );
};
