import { Navbar } from '../'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


export const CalendarPage = () => {
  return (
    <>
    <Navbar/>
    <Calendar></Calendar>
    </>
  )
}
