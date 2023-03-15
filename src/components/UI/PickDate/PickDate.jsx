import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function PickDate() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    <button className="example-custom-input" >
        {format(startDate, "dd-MM-yyyy")}
      </button>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
          </>
  )
}

export default PickDate;