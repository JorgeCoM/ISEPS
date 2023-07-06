import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [percentages, setPercentages] = useState({
    days: 100,
    hours: 100,
    minutes: 100,
    seconds: 100,
  });

  useEffect(() => {
    const number = 31; // establece el tiempo del contador mínimo a 1 día
    const format = "days";
    let countdown;

    // Función para guardar el tiempo restante en el almacenamiento local
    function saveTimeToLocalStorage(timeLeft) {
      localStorage.setItem("countdownTime", JSON.stringify(timeLeft));
    }

    // Función para cargar el tiempo restante desde el almacenamiento local
    function loadTimeFromLocalStorage() {
      const storedTime = localStorage.getItem("countdownTime");
      if (storedTime) {
        const parsedTime = JSON.parse(storedTime);
        setTime(parsedTime);
      }
    }

    // Función para restablecer el tiempo a la configuración inicial
    function resetTime() {
      setTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }

    function convertFormat(format) {
      switch (format) {
        case "seconds":
          return number;
        case "minutes":
          return number * 60;
        case "hours":
          return number * 60 * 60;
        case "days":
          return number * 60 * 60 * 24;
      }
    }

    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countdown);
          resetTime(); // Restablece el tiempo a la configuración inicial
          localStorage.removeItem("countdownTime"); // Elimina el tiempo guardado en el almacenamiento local
          return;
        }

        const timeLeft = {
          days: Math.floor(secondsLeft / 86400),
          hours: Math.floor((secondsLeft % 86400) / 3600),
          minutes: Math.floor(((secondsLeft % 86400) % 3600) / 60),
          seconds:
            secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60,
        };

        setTime(timeLeft);
        saveTimeToLocalStorage(timeLeft); // Guarda el tiempo restante en el almacenamiento local

        setPercentages({
          days: (timeLeft.days / number) * 100,
          hours: (timeLeft.hours / 24) * 100,
          minutes: (timeLeft.minutes / 60) * 100,
          seconds: (timeLeft.seconds / 60) * 100,
        });
      }, 1000);
    }

    loadTimeFromLocalStorage(); // Carga el tiempo restante desde el almacenamiento local
    timer(convertFormat(format));

    return () => clearInterval(countdown);
  }, []);

  return { time, percentages };
};
