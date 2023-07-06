import { useCalendar } from "../../hooks";

export const CalenderComponent = () => {
  const { 
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
    selectedDate,
    setCurrentMonth,
    setSelectedDate,
    subMonths,
  } = useCalendar();

  const data = [
    {
      isUser: true,
      date: new Date(2023, 5, 20),
      color: 'red',
      description: 'Hola mundo'
    },
    {
      isUser: true,
      date: new Date(2023, 5, 24),
      color: 'blue',
      description: 'Hola mundo'
    },
  ];

  const getEventColor = (date) => {
    const eventData = data.find((event) => isSameDay(date, event.date));
    return eventData ? eventData.color : '';
  };

  return (
    <div className="w-full h-full overflow-auto border border-gray-300 rounded-md">
      <div className="flex justify-between border-b border-gray-300">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="hover:bg-gray-300 h-10 w-10 hover:rounded-full rounded-full"
        >
          <i className="pi pi-chevron-left"></i>
        </button>
        <h2 className="flex justify-center items-center">{format(currentMonth, "MMMM yyyy", { locale: es})}</h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="hover:bg-gray-300 h-10 w-10 hover:rounded-full rounded-full"
        >
          <i className="pi pi-chevron-right"></i>
        </button>
      </div>
      <div className="grid grid-cols-7 p-2 gap-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-[12px] font-bold">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isEvent = isSameDay(day, eventDate);
          const isSelectable = isToday(day) || isBefore(day, new Date());
          const eventColor = getEventColor(day); // Obtener el color del evento para el día actual
          
          return (
            <button
              key={day.toString()}
              onClick={() => isSelectable && setSelectedDate(day)}
              style={{
                color: `${eventColor ? eventColor : 'black'}`,
                border: `${eventColor ? '1px solid ' + eventColor : ''}`,
              }}
              className={`
                h-10 rounded-full
                ${isSelected ? "bg-gray-300" : ""}
                ${isEvent ? "bg-blue-300" : ""}
                ${isSelectable ? "" : "opacity-50 cursor-not-allowed"}
                hover:bg-gray-300 hover:rounded-full
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
};
