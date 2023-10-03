import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function App() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);

    const minTime = new Date(0,0,0,9,0,0);
    const maxTime = new Date(0, 0, 0, 17, 0, 0);

    const filterWeekends = (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6;
    };

    const filterPastDates = (date) => {
        return new Date() < date;
    }

    return (
        <div>
            <DatePicker
                showTimeSelect
                minTime={minTime}
                maxTime={maxTime}
                filterDate={date => {
                    return filterPastDates(date) && filterWeekends(date);
                }}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy h:mmaa"
                calendarStartDay={1}
                inline
            />
        </div>
    );
}