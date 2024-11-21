import '../css/date.css'

export function CurrentDate(){
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year= today.getFullYear();
    const todaysDate =  `${day}/${month + 1}/${year}`;

    return(
    <p className="date">{todaysDate}</p>
)}