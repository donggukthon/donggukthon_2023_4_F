import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

function Calendar({
  isRange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  dueDate,
  setDueDate,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  // Java의 LocalDateTime 형식에 맞게 날짜를 포맷팅하는 함수
  const formatDateForLocalDateTime = (date) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}T00:00:00`;
  };

  // 선택된 날짜를 기반으로 상태를 업데이트하는 함수
  const handleChange = (dates) => {
    if (isRange) {
      const [start, end] = dates;
      if (start && end) {
        setStartDate(start);
        setEndDate(end);
        setShowCalendar(false);
      }
    } else {
      setDueDate(dates);
      setShowCalendar(false);
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // 날짜를 문자열로 변환하여 표시하는 함수
  const displayDate = () => {
    const formatDate = (date) => {
      if (!date) return "";

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    if (isRange) {
      return startDate && endDate
        ? `${formatDate(startDate)} ~ ${formatDate(endDate)}`
        : "날짜 선택";
    } else {
      return dueDate ? formatDate(dueDate) : "날짜 선택";
    }
  };

  return (
    <div>
      <button onClick={toggleCalendar}>{displayDate()}</button>
      {showCalendar && (
        <DatePicker
          selected={isRange ? new Date(startDate) : new Date(dueDate)}
          onChange={handleChange}
          startDate={isRange ? new Date(startDate) : null}
          endDate={isRange ? new Date(endDate) : null}
          selectsRange={isRange}
          inline
        />
      )}
    </div>
  );
}

export default Calendar;
