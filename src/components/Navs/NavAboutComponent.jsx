import { useState } from "react";
import { useModal } from "../../hooks";
import { NavLink } from "react-router-dom";

export const NavAboutComponent = () => {
  const [selected, setSelected] = useState(null);

  const dropdownOptions = [
    { label: "Rector", value: "Sub1" },
    { label: "Administación", value: "Sub2" },
    { label: "Organización", value: "Sub3" },
  ];

  const navOption = [
    {
      path: '/about/mision',
      label: 'Misión'
    },
    {
      path: '/about/vision',
      label: 'Visión'
    },
    {
      path: '/about/values',
      label: 'Valores'
    },
  ]

  const { showContainer, toggleContainer, containerRef, buttonRef } = useModal();

  return (
    <nav className="bg-gray-300 rounded-md h-12 px-4">
      <ul className="flex justify-between items-center h-full">
        {navOption.map((e, index) => (
          <NavLink
          to={e.path}
            key={index}
            className={`cursor-pointer flex justify-center items-center h-full 
            ${selected === index + 1 ? "underline" : ""}`}
            onClick={() => setSelected(index + 1)}
          >
            <span className="p-2">{e.label}</span>
          </NavLink>
        ))}
        <li
          ref={buttonRef}
          className={`cursor-pointer flex justify-center items-center relative h-full 
          ${selected === 4 ? "underline" : ""}`}
          onClick={() => {
            setSelected(4);
            toggleContainer();
          }}
        >
          <span className="p-2">Institución</span>
          {showContainer && (
            <div
              ref={containerRef}
              style={{
                position: "absolute",
                top: `100%`,
                right: 0,
                width: "12rem",
                zIndex: 10,
              }}
              className="py-2 bg-white rounded-lg shadow-xl text-black mt-2"
            >
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedDropdown(option.value);
                    toggleContainer();
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
