import { useSelector } from 'react-redux'
import { ClassObj } from '@/store/slices/classesSlice'

/** 
 * Calculate the type of class (gi, no-gi, or open-mat) for a given day of the year
 * @param year 4-digit year
 * @param month 0-indexed month
 * @param day 0-indexed day
 */
export function calendarDayType(year: number, month: number, day: number) {
    // console.log(year, month, day)
    const classes = useSelector((state: { classes: ClassObj[] }) => state.classes)

    // Check if the day is a class
    const classOnDay = classes.find((c) => c.date[0] === year && c.date[1] === month && c.date[2] === day + 1)

    return classOnDay?.type
}