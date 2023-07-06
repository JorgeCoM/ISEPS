import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { Button } from 'primereact/button';

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { HiUserCircle } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  const redirectToUrl = (route) => {
    window.open('https://plataformavirtual.itla.edu.do/course/view.php?id=2370', '_blank');
}

useEffect(() => {
  const savedOpen = localStorage.getItem('open');

  if (savedOpen !== null) {
    setOpen(savedOpen === 'true');
  } else {
    setOpen(isTabletMid ? false : true);
  }
}, [isTabletMid]);

useEffect(() => {
  localStorage.setItem('open', open.toString());
}, [open]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "estudiantes",
      icon: HiUserCircle,
      menus: ["diploma", "clases"],
    },
    {
      name: "profesores",
      icon: HiUserCircle,
      menus: ["estudiantes", "Cursos", "Clases"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray border-r-[1px] border-gray-300 z-[999] max-w-[16rem]  w-[16rem] 
              overflow-hidden md:relative fixed
           h-screen "
      >
        {open ? (
          <div className="flex items-center gap-2.5 font-medium border-b py-2 border-slate-300 mx-3">
            <img
              src="https://uni.com.do/wp-content/uploads/2021/06/ISESP-LOGO-150x150.jpg"
              width={45}
              alt=""
            />
            <span className="text-xl whitespace-pre">ISEPS</span>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
            <img
              src="https://uni.com.do/wp-content/uploads/2021/06/ISESP-LOGO-150x150.jpg"
              width={45}
              alt=""
            />
            <span className="text-xl whitespace-pre">ISEPS</span>
          </div>
        )}

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <FcHome size={23} className="min-w-max" />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="link">
                <FcAbout color="black" size={23} className="min-w-max" />
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink to={"/course"} className="link">
                <FcGraduationCap size={23} className="min-w-max" />
                Cursos
              </NavLink>
            </li>
            <li>
              <NavLink to={"/news"} className="link">
                <FcNews size={23} className="min-w-max" />
                Noticias
              </NavLink>
            </li>
            <li>
              <NavLink to={"/calendar"} className="link">
                <FcCalendar size={23} className="min-w-max" />
                Calendario
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="link">
                <FcAssistant size={23} className="min-w-max" />
                Contacto
              </NavLink>
            </li>
            {/* en caso de tener categorias con sup menus */}
            {/* {(open || isTabletMid) && (
                    <div className="border-y py-5 border-slate-300 ">
                      <small className="pl-3 text-slate-500 inline-block mb-2">
                        Categoria academica
                      </small>
                      {subMenusList?.map((menu) => (
                        <div key={menu.name} className="flex flex-col gap-1">
                          <SubMenu data={menu} />
                        </div>
                      ))}
                    </div>
                  )} */}
          </ul>
          {open && (
              <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre w-full font-medium">
                <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                  <div className="grid grid-cols-1 w-full">
                    <Button onClick={(e) => redirectToUrl('https://www.google.com')} className="grid-cols-1 w-full" label="Plataforma virtual"  severity='info' />
                  </div>
                </div>
              </div>
            )}
        </div>
        <motion.div
  onClick={() => {
    setOpen(!open);
    localStorage.setItem('open', (!open).toString());
  }}
  animate={
    open
      ? {
          x: 0,
          y: 5,
          rotate: 0,
        }
      : {
          x: -10,
          y: 0,
          rotate: 180,
        }
  }
  transition={{ duration: 0 }}
  className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
>
  <IoIosArrowBack size={25} />
</motion.div>

      </motion.div>
      <div className="m-3 lg:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};
