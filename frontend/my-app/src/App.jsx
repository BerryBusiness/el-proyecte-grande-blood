import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function App() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);

    const minTime = new Date(0, 0, 0, 9, 0, 0);
    const maxTime = new Date(0, 0, 0, 17, 0, 0);

    const filterWeekends = (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6;
    };

    const filterPastDates = (date) => {
        return new Date() < date;
    };

    const events = [
        {
            "start": "2023-10-05T09:00:00+02:00",
            "end": "2023-10-05T10:00:00+02:00"
        },
        {
            "start": "2023-10-11T12:00:00+02:00",
            "end": "2023-10-11T13:00:00+02:00"
        }
    ];

    const isTimeSlotDisabled = (time) => {
        for (const event of events) {
            const eventStart = new Date(event.start);
            const eventEnd = new Date(event.end);

            if (time >= eventStart && time < eventEnd) {
                return true; // Disable this time slot
            }
        }
        return false; // Enable this time slot
    };

    return (
        <div>
            <DatePicker
                showTimeSelect // shows the 30-min timeslots
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
                excludeTimes={[
                    // Use excludeTimes to disable specific time slots
                    ...Array.from({ length: 24 }, (_, i) => {
                        const time = new Date();
                        time.setHours(i, 0, 0);
                        return isTimeSlotDisabled(time) ? time : null;
                    }),
                ].filter((time) => time !== null)}
            />
        </div>
    );
}