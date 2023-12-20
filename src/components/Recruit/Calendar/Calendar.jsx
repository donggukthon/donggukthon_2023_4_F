import DatePicker from "react-datepicker";
import React, { useState } from "react";
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
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = (date) => {
    return date
      ? `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
      : "";
  };

  // 선택된 날짜를 기반으로 상태를 업데이트하는 함수
  const handleChange = (dates) => {
    if (isRange) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if (start && end) {
        setShowCalendar(false); // 달력 닫기
      }
    } else {
      setDueDate(dates);
      setShowCalendar(false); // 달력 닫기
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // 날짜를 문자열로 변환하여 표시하는 함수
  const displayDate = () => {
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
          selected={isRange ? startDate : dueDate}
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
