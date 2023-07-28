import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DateTimePicker = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
  
    const handleDateTimeChange = (dateTime) => {
      setSelectedDateTime(dateTime);
    };
  
    return (
      <div >
        <DatePicker
          selected={selectedDateTime}
          onChange={handleDateTimeChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
        />
      </div>
    );
  };
  
  export default DateTimePicker;
  