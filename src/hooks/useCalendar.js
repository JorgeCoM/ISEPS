import { useState } from "react";
import { 
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  isBefore,
  format,
  startOfWeek, 
  endOfWeek
} from 'date-fns';


import { es } from "date-fns/locale";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDate, setEventDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const selectDate = (day) => {
    setSelectedDate(day);
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab",];

  return {
    addMonths,
    currentMonth,
    daysInMonth,
    daysOfWeek,
    es,
    eventDate,
    format,
    isBefore,
    isSameDay,
    isToday,
    nextMonth,
    prevMonth,
    selectDate,
    selectedDate,
    setCurrentMonth,
    setSelectedDate,
    subMonths,
  };
};
