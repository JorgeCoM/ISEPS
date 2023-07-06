import React from 'react';
import { Avatar } from 'primereact/avatar';
import { RiUserFill, RiLogoutBoxRLine } from 'react-icons/ri';

export const UserContent = () => {

  const redirectToUrl = (route) => {
    window.location.href = route;
  }

  return (
    <div className="absolute w-full h-full bg-white">
      <div className="flex border-b border-gray-300 p-2 items-center">
        <Avatar
          image = "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg"
          shape="circle"
          size="large"
          className="mr-2"
        />
        <div>
          <h2 className="font-semibold text-lg text-gray-800">Jorge Coca</h2>
          <p className="font-medium text-[11px] text-gray-500">jorgecoca2323@gmail.com</p>
        </div>
      </div>
      <nav className="mt-3 space-y-1">
        <a onClick={(e) => redirectToUrl('/settings')} className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 hover:cursor-pointer rounded-md">
          <RiUserFill className="mr-3 h-5 w-5 text-gray-500" />
          <span>Perfil</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 hover:cursor-pointer rounded-md">
          <RiLogoutBoxRLine className="mr-3 h-5 w-5 text-gray-500" />
          <span>Cerrar seción</span>
        </a>
      </nav>
    </div>
  );
};
