import { MdEventNote } from 'react-icons/md';

export const EmptyComponent = () => {
 return (
    <div className="flex w-full items-center justify-center flex-col flex-grow h-full">
      <MdEventNote size={30} className=" text-gray-600"/>
      <div className="text-sm font-semibold text-gray-600">
        No hay nada para mostrar
      </div>
    </div>
  );
};
