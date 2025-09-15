import React, { useState, useEffect } from 'react'
import { getCurrentDate, getCurrentDayInMonthIndex, getCurrentMonth, getCurrentYear, getDaysInMonth, formatDate } from '../../utils/dateUtils'

const Calendar = ({ isCalendarActive }) => {

    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    const monthNames = [
        { fullName: "January", abrName: "Jan" },
        { fullName: "February", abrName: "Feb" },
        { fullName: "March", abrName: "Mar" },
        { fullName: "April", abrName: "Apr" },
        { fullName: "May", abrName: "May" },
        { fullName: "June", abrName: "Jun" },
        { fullName: "July", abrName: "Jul" },
        { fullName: "August", abrName: "Aug" },
        { fullName: "September", abrName: "Sep" },
        { fullName: "October", abrName: "Oct" },
        { fullName: "November", abrName: "Nov" },
        { fullName: "December", abrName: "Dec" },
    ]

    // date values
    const currentDayOfMonth = getCurrentDate()
    const currentMonthIndex = getCurrentMonth()
    const currentYear = getCurrentYear()

    // calendar state management
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(getCurrentMonth())
    const [selectedYear, setSelectedYear] = useState(getCurrentYear())
    const [daysInSelectedMonth, setDaysInSelectedMonth] = useState(getDaysInMonth(selectedYear, selectedMonthIndex))
    const [selectedDayOfMonth, setSelectedDayOfMonth] = useState(getCurrentDate())
    const [selectedDayIndex, setSelectedDayIndex] = useState(getCurrentDayInMonthIndex(selectedYear, selectedMonthIndex, selectedDayOfMonth))
    const [firstDayOffset, setFirstDayOffset] = useState(0) // Number of empty cells before first day

    const handleMonthNavigation = (direction) => {
        if (direction === 'next') {
            setSelectedMonthIndex(prevMonthIndex => {
                const newMonthIndex = prevMonthIndex + 1
                if (newMonthIndex > 11) {
                    setSelectedYear(selectedYear + 1)
                    return 0
                }
                return newMonthIndex
            })
        } else {
            setSelectedMonthIndex(prevMonthIndex => {
                const newMonthIndex = prevMonthIndex - 1
                if (newMonthIndex < 0) {
                    setSelectedYear(selectedYear - 1)
                    return 11
                }
                return newMonthIndex
            })
        }      
    }

    // Calculate the day of the week for the first day of the month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (year, monthIndex) => {
        return new Date(year, monthIndex, 1).getDay();
    }

    // Convert Sunday (0) to Monday (0) based week system
    const convertToMondayFirst = (dayIndex) => {
        return dayIndex === 0 ? 6 : dayIndex - 1; // Sunday becomes 6, Monday becomes 0, etc.
    }

    // Effect to update days in month and first day offset when month or year changes
    useEffect(() => {
        setDaysInSelectedMonth(getDaysInMonth(selectedYear, selectedMonthIndex))
        setSelectedDayIndex(getCurrentDayInMonthIndex(selectedYear, selectedMonthIndex, selectedDayOfMonth));
        
        // Calculate offset for first day (adjusting for Monday-first week)
        const firstDay = getFirstDayOfMonth(selectedYear, selectedMonthIndex);
        const mondayFirstOffset = convertToMondayFirst(firstDay);
        setFirstDayOffset(mondayFirstOffset);
    }, [selectedDayOfMonth, selectedMonthIndex, selectedYear]);

    // Effect to reset to current date if viewing current month
    useEffect(() => {
        if (selectedMonthIndex === currentMonthIndex && selectedYear === currentYear) {
            setSelectedDayOfMonth(currentDayOfMonth)
        } else {
            setSelectedDayOfMonth(1)
        }
    }, [selectedMonthIndex])

    return (
        <div
            className={`min-h-60 min-w-80 h-fit w-fit bg-background rounded-md border-2 border-primary absolute -bottom-[23.5rem]  right-0 duration-200 transition ${isCalendarActive ? "flex" : "hidden"} flex-col gap-5 p-2.5`}
        >
            
            {/* month buttons and current month/year */}
            <div className='flex flex-row w-full items-center justify-between px-2'>
                <button
                    className='p-1 rounded-full bg-secondBackground border-2 border-primary duration-200 hover:bg-primary'
                    onClick={() => handleMonthNavigation("previous")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentcolor" d="m10.108 12l4.246 4.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.344-.15t.364.15t.16.354t-.16.354z" />
                    </svg>
                </button>
                <p className='text-sm font-semibold flex flex-row items-center gap-1'>
                    <span>{monthNames[selectedMonthIndex].fullName}</span> 
                    <span>{selectedYear}</span>
                </p>
                <button
                    className='rotate-180 p-1 rounded-full bg-secondBackground border-2 border-primary duration-200 hover:bg-primary'
                    onClick={() => handleMonthNavigation("next")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentcolor" d="m10.108 12l4.246 4.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.344-.15t.364.15t.16.354t-.16.354z" />
                    </svg>
                </button>
            </div>

            {/* calendar grid */}
            <div className='grid grid-cols-7 w-full h-full gap-3 px-2'>

                {/* day headers */}
                <div className='col-span-7 w-full grid grid-cols-7 gap-2 items-center justify-center'>
                    {days.map((day, index) => (
                        <p key={index} className='text-xs text-dimText font-medium w-full flex items-center justify-center'>
                            {day}
                        </p>
                    ))}
                </div>

                {/* day numbers with proper offset */}
                <div className='grid grid-cols-7 grid-rows-6 w-full h-full col-span-7 items-center justify-center gap-2 gap-y-3'>
                    {/* Empty cells for days before the first day of the month */}
                    {Array.from({ length: firstDayOffset }, (_, index) => (
                        <div key={`empty-${index}`} className='w-full h-6' /> // Empty placeholder
                    ))}
                    
                    {/* Actual days of the month */}
                    {Array.from({ length: daysInSelectedMonth }, (_, index) => {
                        const dayNumber = index + 1;
                        const isCurrentDay = selectedMonthIndex === currentMonthIndex && 
                                           selectedYear === currentYear && 
                                           dayNumber === currentDayOfMonth;
                        const isSelectedDay = dayNumber === selectedDayOfMonth;
                        
                        return (
                            <button
                                key={dayNumber}
                                className={`text-xs font-medium duration-200 w-full flex items-center justify-center p-1 rounded-full py-2 ${
                                    isCurrentDay 
                                        ? 'bg-primary text-background font-bold' 
                                        : isSelectedDay
                                        ? 'bg-secondBackground border border-primary'
                                        : 'text-text hover:bg-primary hover:text-background'
                                }`}
                                onClick={() => setSelectedDayOfMonth(dayNumber)}
                            >
                                {dayNumber}
                            </button>
                        );
                    })}
                </div>

            </div>

        </div>
    )
}

export default Calendar