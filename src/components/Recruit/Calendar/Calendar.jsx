import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

function Calendar({ isRange }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = (date) => {
    return date
      ? `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
      : "";
  };

  const handleChange = (dates) => {
    if (isRange) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if (start && end) {
        setFormattedDate(`${formatDate(start)} ~ ${formatDate(end)}`);
        setShowCalendar(false); // 달력 닫기
      }
    } else {
      setStartDate(dates);
      setFormattedDate(formatDate(dates));
      setShowCalendar(false); // 달력 닫기
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <button onClick={toggleCalendar}>{formattedDate || "날짜 선택"}</button>
      {showCalendar && (
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          startDate={isRange ? startDate : null}
          endDate={isRange ? endDate : null}
          selectsRange={isRange}
          inline
        />
      )}
    </div>
  );
}

export default Calendar;
