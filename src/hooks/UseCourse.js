import { useLocation } from "react-router-dom";
import { CourseData } from "../mockups/Data/CourseData";

import { useState } from "react";

export const UseCourse = () => {

const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const data = CourseData.find((item) => item.id === parseInt(id));

  const [sections, setSections] = useState({
    section0: false,
    section1: false 
  });

  const handleClickCostos = () => {
    setSections({
      section0: false,
      section1: true
    });
  };

  const handleClickAdmision = () => {
    setSections({
      section0: true,
      section1: false
    });
  };

  const handleClickClosed = () => {
    setSections({
      section0: false,
      section1: false
    });
  };
  

    return {
        data,
        sections,
        handleClickCostos,
        handleClickAdmision,
        handleClickClosed
    }
}