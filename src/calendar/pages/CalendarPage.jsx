import { Navbar } from '../'
import { Calendar } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { addHours } from 'date-fns';
import { localizer } from '../../helpers';


const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    _id: '123',
    name: 'Belen'
  }
}]

export const CalendarPage = () => {
  return (
    <>
    <Navbar/>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "calc(100vh - 80px)" }}
    />
    </>
  )
}
