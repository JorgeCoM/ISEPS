import { useCountdown } from "../../hooks";
import { CountdownCircular } from "./CountdownCircular";

export const CountdownComponent = () => {
  const { time, percentages } = useCountdown();

  return (
    <>
      <div className="relative flex items-center justify-center bg-black bg-opacity-10 rounded-full w-36 h-36">
        <div className="absolute">
          <CountdownCircular percentage={percentages.days} />
        </div>
        <div className="z-10 text-center p-4">
          <div className="text-5xl">{time.days}</div>
          <div className="uppercase text-sm">Dias</div>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-black bg-opacity-10 rounded-full w-36 h-36">
        <div className="absolute">
          <CountdownCircular percentage={percentages.hours} />
        </div>
        <div className="z-10 text-center p-4">
          <div className="text-5xl">{time.hours}</div>
          <div className="uppercase text-sm">Horas</div>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-black bg-opacity-10 rounded-full w-36 h-36">
        <div className="absolute">
          <CountdownCircular percentage={percentages.minutes} />
        </div>
        <div className="z-10 text-center p-4">
          <div className="text-5xl">{time.minutes}</div>
          <div className="uppercase text-sm">Minutos</div>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-black bg-opacity-10 rounded-full w-36 h-36">
        <div className="absolute">
          <CountdownCircular percentage={percentages.seconds} />
        </div>
        <div className="z-10 text-center p-4">
          <div className="text-5xl">{time.seconds}</div>
          <div className="uppercase text-sm">Segundos</div>
        </div>
      </div>
    </>
  );
};
