import { useRef } from "react";
import { CountdownComponent } from "../components/Countdown/CountdownComponent";

export const UnderConstruction = () => {
  const refShowCountdown = useRef(true);

  return (
    <div className="flex flex-col p-4 justify-center items-center h-[390px]">
      <h1 className="text-4xl font-bold mb-2">¡En construcción!</h1>
      <p className="text-lg mb-8">
        Este sitio web estará disponible pronto, ¡Aqui tiempo aproximado de lanzamiento!
      </p>
      <section className="flex justify-evenly w-full max-w-4xl mx-auto">
        {refShowCountdown.current ? <CountdownComponent /> : <></>}
      </section>
    </div>
  );
};
