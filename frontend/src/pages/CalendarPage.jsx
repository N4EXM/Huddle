import React, { useState, useEffect } from 'react'
import Sidebar from '../components/General/Sidebar'
import Navbar from '../components/General//Navbar'
import { getCurrentDate, getCurrentDayInMonthIndex, getCurrentMonth, getCurrentYear } from '../utils/dateUtils'

const CalendarPage = () => {

  // date values
  const currentDayOfMonth = getCurrentDate()
  const currentMonthIndex = getCurrentMonth()
  const currentYear = getCurrentYear()

  // calendar state management
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([])
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(getCurrentMonth())
  const [selectedYear, setSelectedYear] = useState(getCurrentYear())
  const [daysInSelectedMonth, setDaysInSelectedMonth] = useState(getCurrentDayInMonthIndex())
  const [selectedDayOfMonth, setSelectedDayOfMonth] = useState(getCurrentDate())
  const [selectedDayIndex, setSelectedDayIndex] = useState(getCurrentDayInMonthIndex(selectedYear, selectedMonthIndex, selectedDayOfMonth))

  // Month and day name data
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
  
  const dayNames = [
    { fullName: "Sunday", abrName: "Sun" },
    { fullName: "Monday", abrName: "Mon" },
    { fullName: "Tuesday", abrName: "Tue" },
    { fullName: "Wednesday", abrName: "Wed" },
    { fullName: "Thursday", abrName: "Thu" },
    { fullName: "Friday", abrName: "Fri" },
    { fullName: "Saturday", abrName: "Sat" },
  ]

  useEffect(() => {
    console.log("tasksForSelectedDate:", tasksForSelectedDate)
    console.log("selectedMonthIndex: ", selectedMonthIndex)
    console.log("selectedYear: ", selectedYear)
    console.log("daysInSelectedMonth:", daysInSelectedMonth)
    console.log("selectedDayOfMonth: ", selectedDayOfMonth)
    console.log("selectedDayIndex: ", selectedDayIndex)
  }, [])

  return (
    <div
      className='w-full h-screen max-h-screen bg-background p-8 grid grid-cols-12 grid-rows-12 text-text gap-4'
    >
      <Sidebar/>
      <Navbar/>
      <div
        className='w-full h-full col-span-9 row-span-10 grid grid-cols-12 grid-rows-12 gap-4'
      >
        {/* title */}
        <div
          className='col-span-12'
        >
          <p
            className='font-semibold text-3xl'
          >
            Calendar
          </p>
        </div>   

        {/* calendar container */}
        <div
          className='flex p-5 flex-col gap-4 col-span-7 row-span-11 bg-secondBackground rounded-md'
        >

          {/* month, year and buttons */}
          <div
            className='flex flex-row items-center justify-between w-full h-fit'
          >
            <h1
              className='text-xl font-bold'
            >
              August 2025
            </h1>
            <div
              className='flex flex-row items-center gap-2'
            >
              <button
                className='bg-background p-2 rounded-full hover:bg-primary duration-200'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/></svg>
              </button>
              <button
                className='rotate-180 bg-background p-2 rounded-full hover:bg-primary duration-200'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/></svg>
              </button>
            </div>
          </div>

        </div>

        {/* selected date Tasks */}
        <div
          className='col-span-5 row-span-11 bg-secondBackground rounded-md'
        >

        </div>

      </div>
      
    </div>
  )
}

export default CalendarPage