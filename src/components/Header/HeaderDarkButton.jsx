import { useState, useEffect } from "react";
import { Button } from "primereact/button";

export const HeaderDarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setIsDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      // Aquí puedes aplicar los estilos para el modo oscuro
      document.body.classList.add("dark");
    } else {
      // Aquí puedes revertir los estilos para el modo claro
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Button
      rounded
      text
      severity="info"
      className="p-button-rounded p-button-outlined"
      icon={isDarkMode ? "pi pi-moon" : "pi pi-sun"}
      onClick={toggleDarkMode}
    />
  );
};
