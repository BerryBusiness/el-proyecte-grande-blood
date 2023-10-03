import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function App() {

    const [date, setDate] = useState(new Date());
    const pastDates = (date) => new Date() < date;

    return (
        <div>
            <DatePicker
                showTimeSelect
                minTime={new Date(0, 0, 0, 9, 0)}
                maxTime={new Date(0, 0, 0, 17, 0)}
                filterDate={date => {
                    // Disable weekends (Saturday and Sunday)
                    return new Date() < date && date.getDay() !== 0 && date.getDay() !== 6;
                }}
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MMMM d, yyyy h:mmaa"
                calendarStartDay={1}
            />
        </div>
    );
}