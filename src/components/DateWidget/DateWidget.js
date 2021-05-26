import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './DateWidget.css';

export const DateWidget = (props) => {
    const [date, setDate] = useState(new Date());
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let displayBool = (props.show) ? 'block' : 'none';
    return (
        <div style={{ display: displayBool }}>
            <div className="text-center p-0 m-0 h-3" style={{ color:'#E2E0DD', width:"calc(100% - 8rem)" }}>
                <ion-icon name="caret-up-outline" ></ion-icon>
            </div>
            <div style={{ width:"calc(100% - 8rem)" }}>
                <div className="w-4/12 m-auto px-3 py-4" style={{ background:'#E2E0DD', borderRadius:'5px'}}>
                    <div className="text-sm">
                        {days[date.getDay()]}
                    </div>
                    <div className="text-2xl">
                        {months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()}
                    </div>
                    <div className="w-11/12 m-auto my-3" style={{ borderRadius:'10px' }}>
                        <Calendar value={date} onChange={setDate} className="calendarWidget m-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
