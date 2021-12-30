import { useState } from 'react';
import Calendar from 'react-calendar';


export function CalendarDate({ getDate }){

  const [date, setDate] = useState(new Date())

  const returnDate = date => {
    setDate(date)
    getDate(date)
  }

  return(
    <div>
      <Calendar onChange={ returnDate } value={ date }/>
    </div>
  )
}