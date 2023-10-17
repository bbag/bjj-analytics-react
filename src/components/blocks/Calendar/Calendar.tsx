import { useState } from 'react'
import { calendarDayType, daysInMonth, emptyDaysInMonth } from './utils'

import styles from './_Calendar.module.scss'

import Card from '@/components/ui/Card/Card'
import CardHeader from '@/components/ui/CardHeader/CardHeader'

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]

export default function Calendar() {

    const [selectedYear] = useState(new Date().getFullYear().toString())
    
    return (
        <Card>
            <CardHeader aside={selectedYear || new Date().getFullYear().toString()}>Year at a Glance</CardHeader>
            <div className={styles['calendar']}>
                {months.map((month, monthIndex) => (
                    <div className={styles['month']} key={month}>
                        <div className={styles['month-name']}>{month}</div>
                        <div className={styles['month-day-names']}>
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, dayIndex) => (
                                <div className={styles['day-name']} key={dayIndex}>{day}</div>
                            ))}
                        </div>
                        <div className={styles['month-days']}>
                            {/* Add empty <span> elements for the empty days  */}
                            {Array.from(Array(emptyDaysInMonth(monthIndex + 1, parseInt(selectedYear))).keys()).map((day) => (
                                <div className={styles['month-day']} key={day}></div>
                            ))}
                            {/* Add a <button> element for each day of the month */}
                            {Array.from(Array(daysInMonth(monthIndex + 1, parseInt(selectedYear))).keys()).map((day) => (
                                <button
                                    className={styles['month-day']}
                                    key={day}
                                    data-type={calendarDayType(+selectedYear, monthIndex, day)}
                                >
                                    <span
                                        className={styles['day-dot']}
                                        title={`${months[monthIndex].substring(0, 3)}. ${(day + 1).toString()}`}
                                    ></span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}