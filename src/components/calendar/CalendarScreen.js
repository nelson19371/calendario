import React from 'react'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import { Navbar } from '../ui/Navbar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-messages-es'

const localizer = momentLocalizer(moment)

const events =
[{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end:moment().add(2,'hour').toDate(),
    bgcolor: '#fafafa'

}]


export const CalendarScreen = () => {
    const eventStyleGetter= (event, start, end, isSelected)=>{
        
        const style={
            backgroundColor:'green',
            borderRadius:'0px',
            opacity:0.8,
            display:'block'
        }
        return {style };
    }



    return (
        <div className="calendar-screen">
            <Navbar/>

            <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
      eventPropGetter={eventStyleGetter}
    />
        </div>
    )
}
