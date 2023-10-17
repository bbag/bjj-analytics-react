// import { daysInYear } from './daysInYear'

function isLeapYear(year: number) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

function isAfterFeb28(date: Date) {
    return date.getMonth() > 1 || date.getMonth() === 1 && date.getDate() > 28
}

/** Given a year (YYYY), return the number of days that have passed. */
export function daysPassedInYear(year: number) {
    const date = new Date()
    let dayOfYear = Math.floor((date.getTime() - new Date(year, 0, 0).getTime()) / 86400000)
    
    // Check if the current year is a leap year and the date is after February 28
    if (isLeapYear(year) && isAfterFeb28(date)) {
        dayOfYear++
    }
    
    return dayOfYear
    // Return a percentage between 1 and 100 (rounded to 1 decimal place)
    // return Math.max(Math.min(Math.round(dayOfYear / daysInYear(year) * 1000) / 10, 100), 0)
}