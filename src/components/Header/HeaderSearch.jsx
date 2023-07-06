import { InputText } from "primereact/inputtext";


export const HeaderSearch = () => {
  return (
    <span className="p-input-icon-left w-[450px]">
      <i className="pi pi-search" />
      <InputText className="w-full" placeholder="Buscar un curso..." />
    </span>
  );
};
