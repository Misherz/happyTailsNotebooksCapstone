import { useState } from "react";

export default function MyCalendar(){
    let [date, SetDate] = useState()

    const dates = new Date();
    const day = dates.getDay();
    const month = dates.getMonth();
    const year= dates.getFullYear();
    const currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function getDaysMonth(){
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //leapyear
    if (month === 1) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
      }
      return daysInMonth[month]
    }

        
    return(
        <div></div>
    )
}