import { Button } from "primereact/button";

export const MultipleSliderContent = ({ data = [], selected }) => {
  
  const redirectToUrl = (title, id) => {
    const queryString = `?title=${(title)}&id=${id}`;
    window.location.href = `course/info${queryString}`;
  }; 

  return (
    <div
      className={`w-[200px] rounded-md ${
        selected
          ? "bg-gray-300 transform-gpu scale-110 shadow-white"
          : "bg-white"
      } transition-transform duration-500 ease-in-out rounded-md`}
    >
      <div className="w-full p-4 h-full">
        <div className="flex flex-col">
          <div
            className="rounded-full mb-2"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className={`${data.icon}`}></i>
          </div>
          <div
            className="font-bold text-sm capitalize w-full mb-2"
            style={{ height: "50px", overflow: "hidden" }}
          >
            {data.title}
          </div>
          <div className="flex items-center mb-2 justify-between">
            <div className="flex">
              <p className="text-[9px] pr-1">Creditos </p>
              <p className="text-[9px] font-bold">{data.credits}</p>
            </div>
            <div className="w-1 h-1 bg-black rounded-full" />
            
            <div className="flex">
              <p className="text-[9px]">Duración </p>{" "}
              <p className="text-[9px] font-bold pl-1">{data.duration.length > 8 ? `${data.duration.slice(0, 8)}...` : data.duration}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <Button disabled={data.status} onClick={() => redirectToUrl(data.title, data.id)} severity="info" className="grid-span-1 flex justify-center">
            Leer mas
          </Button>
        </div>
      </div>
    </div>
  );
};
