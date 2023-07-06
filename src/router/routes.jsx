import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Course, Home, News, Settings, UnderConstruction, Calender, About, CourseItemPage, Contact  } from "../pages";
import { AboutUs, Mision, Values, Vision } from "../pages/AboutPages";

const isUnderConstruction = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: '/course/info',
        element: <CourseItemPage/>
      },
      {
        path: "/settings",
        element: isUnderConstruction ? <UnderConstruction /> : <Settings />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            index: true,
            element: <AboutUs/>,
          },
          {
            path: '/about/mision',
            element: <Mision/>
          },
          {
            path: '/about/values',
            element: <Values/> 
          },
          {
            path: '/about/vision',
            element: <Vision/>
          }
        ]
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/calendar",
        element: isUnderConstruction ? <UnderConstruction /> : <Calender />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
