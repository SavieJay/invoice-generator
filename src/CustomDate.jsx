import React, { useState, useEffect, useRef } from 'react';

const CustomDate = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);
  const wrapperRef = useRef(null);
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  // Generate years (current year - 5 to current year + 5)
  const years = [];
  const currentYearNum = new Date().getFullYear();
  for (let i = currentYearNum - 5; i <= currentYearNum + 5; i++) {
    years.push(i);
  }
  
  // Generate calendar days for the selected month/year
  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    let days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    setCalendarDays(days);
  }, [currentMonth, currentYear]);
  
  const handleDateSelect = (day) => {
    if (day) {
      const date = new Date(currentYear, currentMonth, day);
      setSelectedDate(date.toISOString().split('T')[0]);
      setShowCalendar(false);
    }
  };
  
  const handleMonthChange = (e) => {
    setCurrentMonth(months.indexOf(e.target.value));
  };
  
  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };
  
  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };
  
  // Check if a day is today
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    
    // Attach the listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  
  return (
    <div className="relative w-fit" ref={wrapperRef}>
      <input
        type="text"
        className="w-41 h-10 px-4 border text-[.75rem] text-gray-900 text-right border-gray-300 rounded focus:outline-none"
        value={formatDate(selectedDate)}
        onClick={() => setShowCalendar(!showCalendar)}
        readOnly
      />
      
      {showCalendar && (
        <div className="absolute left-2 p-2 text-[.75rem] top-10 w-60 bg-white border border-gray-300 rounded shadow-lg z-10">
          {/* Month and Year selectors */}
          <div className="flex justify-between items-center p-2 border-b">
            <button 
              className="text-gray-600 hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => navigateMonth('prev')}
            >
              &#9664;
            </button>
            
            <div className="flex space-x-1">
              <select 
                value={months[currentMonth]} 
                onChange={handleMonthChange}
                className="p-1 border border-gray-300 rounded text-[.75rem]"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              
              <select 
                value={currentYear} 
                onChange={handleYearChange}
                className="p-1 border border-gray-300 rounded text-[.75rem]"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <button 
              className="text-gray-600 hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => navigateMonth('next')}
            >
              &#9654;
            </button>
          </div>
          
          {/* Calendar weekday headers */}
          <div className="grid grid-cols-7 text-center text-[.75rem] border-b">
            {days.map(day => (
              <div key={day} className="py-1">{day}</div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`
                  py-1 border border-gray-100 cursor-pointer
                  ${day ? 'hover:bg-gray-100' : ''}
                  ${isToday(day) ? 'bg-yellow-200' : ''}
                `}
                onClick={() => handleDateSelect(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDate;