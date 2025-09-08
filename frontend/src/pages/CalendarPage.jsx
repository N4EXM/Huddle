import React, { useState, useEffect, useContext } from 'react'
import Sidebar from '../components/General/Sidebar'
import Navbar from '../components/General//Navbar'
import { useMock } from '../context/MockContext'
import { getCurrentDate, getCurrentDayInMonthIndex, getCurrentMonth, getCurrentYear, getDaysInMonth, getCurrentDateToLocaleString } from '../utils/dateUtils'

const CalendarPage = () => {

  // context
  const { tasks } = useMock()
  
  // date values
  const currentDayOfMonth = getCurrentDate()
  const currentMonthIndex = getCurrentMonth()
  const currentYear = getCurrentYear()

  // calendar state management
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([])
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(getCurrentMonth())
  const [selectedYear, setSelectedYear] = useState(getCurrentYear())
  const [daysInSelectedMonth, setDaysInSelectedMonth] = useState(getDaysInMonth(selectedYear, 7))
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

  const handleMonthNavigation = (direction) => {
    if (direction === 'next') {
      setSelectedMonthIndex(prevMonthIndex => {
        const newMonthIndex = prevMonthIndex + 1
        // If moving past December, go to January of next year
        if (newMonthIndex > 11) {
          setSelectedYear(prevYear => prevYear + 1)
          return 0
        }
        return newMonthIndex
      })
    } else {
      setSelectedMonthIndex(prevMonthIndex => {
        const newMonthIndex = prevMonthIndex - 1
        // If moving before January, go to December of previous year
        if (newMonthIndex < 0) {
          setSelectedYear(prevYear => prevYear - 1)
          return 11
        }
        return newMonthIndex
      })
    }      
  }

  useEffect(() => {
    console.log("tasksForSelectedDate:", tasksForSelectedDate)
    console.log("selectedMonthIndex: ", selectedMonthIndex)
    console.log("selectedYear: ", selectedYear)
    console.log("daysInSelectedMonth:", daysInSelectedMonth)
    console.log("selectedDayOfMonth: ", selectedDayOfMonth)
    console.log("selectedDayIndex: ", selectedDayIndex)
    console.log("numberOfDays: ", daysInSelectedMonth)
  }, [])

  // Effect to update days in month when month or year changes
  // useEffect(() => {
  //   setDaysInSelectedMonth(getDaysInMonth(selectedYear, selectedMonthIndex))
  //   setSelectedDayIndex(getCurrentDayInMonthIndex(selectedYear, selectedMonthIndex, selectedDayOfMonth));
  // }, [selectedDayOfMonth, selectedMonthIndex, selectedYear]);

  // Effect to reset to current date if viewing current month
  useEffect(() => {
    if (selectedMonthIndex === currentMonthIndex && selectedYear === currentYear) {
      setSelectedDayOfMonth(currentDayOfMonth)
    } else {
      setSelectedDayOfMonth(null)
    }
  }, [selectedMonthIndex])

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
              {monthNames[selectedMonthIndex].fullName} {selectedYear}
            </h1>
            <div
              className='flex flex-row items-center gap-2'
            >
              <button
                className='bg-background p-2 rounded-full hover:bg-primary duration-200'
                onClick={() => handleMonthNavigation("previous")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/></svg>
              </button>
              <button
                className='rotate-180 bg-background p-2 rounded-full hover:bg-primary duration-200'
                onClick={() => handleMonthNavigation("next")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/></svg>
              </button>
            </div>
          </div>

          {/* date buttons */}
          <div
            className='grid grid-cols-6 w-full h-full grid-rows-6 gap-2 overflow-y-scroll'
          >
            {
              Array.from({ length: daysInSelectedMonth }, (_, index) => {

                const dayNumber = index + 1;
                const date = new Date(selectedYear, selectedMonthIndex, dayNumber);
                const dayOfWeekIndex = date.getDay(); // 0 (Sun) to 6 (Sat)
                let taskCount = 0

                for (let i = 0; i < tasks.length; i++) {

                  console.log(tasks[i])
                  const currentDate = tasks[i].formattedDate

                  if (currentDate === date.toLocaleDateString()) {
                    taskCount + 1
                  }

                }

                return (
                  <div
                    className='w-full h-full rounded-md p-2 bg-background border border-background duration-200 hover:border-primary flex flex-col items-start justify-between'
                    key={dayNumber}
                  >
                    <p
                      className='font-medium text-xs'
                    >
                      {dayNames[dayOfWeekIndex].abrName} {dayNumber}
                    </p>
                    <div
                      className='w-full flex-row flex gap-1'
                    >
                      {
                        Array.from({ length: taskCount }, (_) => {
                          return (
                            <span
                              className={`${selectedDayOfMonth === dayNumber ? "text-background" : "text-primary"}`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"/></svg>
                            </span>
                          )
                        })
                      }
                    </div>
                  </div>
                )
                
              })
            }
            
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