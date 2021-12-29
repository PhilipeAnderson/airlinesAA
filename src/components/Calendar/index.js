import { useState } from 'react';
import Calendar from 'react-calendar';


export function CalendarDate(){

  const [date, setDate] = useState(new Date())

  const returnDate = date => {
    setDate(date)
  }

  return(
    <div>
      <Calendar onChange={ returnDate } value={ date }/>
      {console.log(date)}
      {date.toString()}

    </div>
  )
}