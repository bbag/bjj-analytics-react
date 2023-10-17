/** Calculate the number of empty days in the calendar before the first day of the month */
export function emptyDaysInMonth(month: number, year: number) {
    return new Date(year, month - 1, 1).getDay()
}