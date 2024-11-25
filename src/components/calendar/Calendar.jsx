import { useState } from "react";
import '../../css/calendar.css'

export default function MyCalendar() {
    let [date, SetDate] = useState(new Date());

    //String arrays
    //constructor
    const currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    //Date based off useState
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = date.getDate();


    function getDaysMonth() {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        //leapyear
        if (month === 1) {
            return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        }
        return daysInMonth[month]
    }

    function displayCurrentDay() {
        return week[day];
    }
    function displayCurrentMonth() {
        return currentMonth[month];
    }

    function getCalendar() {
        //retrieve first day of the month
        //first param the year
        //2nd get month based on index 0 = January
        //1 means 1st day of that month
        //0=Sunday
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        //Starting with an empty array to push null into
        //storing calendar days
        let weekdays = [];

        //push null to the empty slots until 1st day is reached
        for (let i = 0; i < firstDayOfMonth; i++) {
            weekdays.push(null);
        }

        //Add actual days starting at 1 since null is at 0
        const daysInMonth = getDaysMonth();
        for (let i = 1; i <= daysInMonth; i++) {
            weekdays.push(i);
        }
        return weekdays
    }

    //month year established above
    //function for pagination 
    //setMonth is a date object from Date
    function nextMonthClick(event) {
        event.preventDefault();
        let nextMonth = month + 1;
        let nextYear = year;

        if (nextMonth > 11) {  //Next month after DEC will go to Jan
            nextMonth = 0;  
            nextYear += 1;  
        }
        SetDate(new Date(nextYear, nextMonth, 1));
    }

    function prevMonthClick(event) {
        event.preventDefault();
        let prevMonth = month - 1;
        let prevYear = year;
    
        if (prevMonth < 0) {  
            prevMonth = 11;  // Go to DEC of prev year
            prevYear -= 1; 
        }
        SetDate(new Date(prevYear, prevMonth, 1)); 
    }

    const calendarDays = getCalendar();


    return (
        
        <div className="calendar">
            <div className="header">
                <button type="button" onClick={prevMonthClick}>«</button>
                <div className="monthYear">
                    <h1>{displayCurrentMonth()} {year}</h1>
                </div>
                <button onClick={nextMonthClick}>»</button>
            </div>
            <div className="weekdays">
                {week.map((day, index) => (
                    <div key={index} className="weekday">{day}</div>
                ))}
            </div>
            <div className="days">
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${day ? "" : "empty"} ${day === currentDate ? "current-day" : ""} `}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
}