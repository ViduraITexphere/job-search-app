import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function PickDate(props) {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    props.handleDueDateSubmit(date);
  };

  return (
    <>
      <button className="example-custom-input">
        {format(startDate, "dd-MM-yyyy")}
      </button>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        inline
      />
    </>
  );
}

export default PickDate;
