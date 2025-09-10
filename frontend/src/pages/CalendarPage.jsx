import React, { useState, useEffect, useMemo } from 'react'
import Sidebar from '../components/General/Sidebar'
import Navbar from '../components/General//Navbar'
import { useMock } from '../context/MockContext'
import { getCurrentDate, getCurrentDayInMonthIndex, getCurrentMonth, getCurrentYear, getDaysInMonth, formatDate } from '../utils/dateUtils'
import TaskCard from '../components/CalendarPage/TaskCard'

const CalendarPage = () => {

  // context
  const { tasks, getSpecificUsers } = useMock()
  
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

  // viewer state management
  const [tasksView, setTasksView] = useState(false)
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([])



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

  // prevents filtering operation for every date 
  const tasksByDate = useMemo(() => {
    const map = new Map();
      tasks.forEach(task => {
      map.set(task.date, (map.get(task.date) || 0) + 1);
    });
      return map;
  }, [tasks]);

  // Filters and loads tasks for the selected date
  const loadTasksForSelectedDate = (date) => {
    if (!tasks|| !Array.isArray(tasks)) return;

    const filteredTasks = tasks.filter(task => {
      return task.date === date;
    });

    setTasksForSelectedDate(filteredTasks);

  }

  useEffect(() => {
    console.log("selectedMonthIndex: ", selectedMonthIndex)
    console.log("selectedYear: ", selectedYear)
    console.log("daysInSelectedMonth:", daysInSelectedMonth)
    console.log("selectedDayOfMonth: ", selectedDayOfMonth)
    console.log("selectedDayIndex: ", selectedDayIndex)
    console.log("numberOfDays: ", daysInSelectedMonth)
  }, [])

  // useEffect(() => {
  //   if (selectedMonthIndex === currentMonthIndex) {
  //     setSelectedDayOfMonth(currentDayOfMonth)
  //   }
  //   else {
  //     setSelectedDayOfMonth(0)
  //   }
  // }, [selectedMonthIndex])

  // change the state of the calendar viewer
  useEffect(() => {
    if (tasksForSelectedDate.length > 0) {
      setTasksView(true)
      console.log(tasksForSelectedDate, "true")
    }
    else {
      setTasksView(false)
      console.log(tasksForSelectedDate, "false")
    }
  }, [tasksForSelectedDate])

  // Effect to update days in month when month or year changes
  useEffect(() => {
    setDaysInSelectedMonth(getDaysInMonth(selectedYear, selectedMonthIndex))
    setSelectedDayIndex(getCurrentDayInMonthIndex(selectedYear, selectedMonthIndex, selectedDayOfMonth));
  }, [selectedDayOfMonth, selectedMonthIndex, selectedYear]);

  // Effect to reset to current date if viewing current month
  useEffect(() => {
    if (selectedMonthIndex === currentMonthIndex && selectedYear === currentYear) {
      setSelectedDayOfMonth(currentDayOfMonth)
    } else {
      setSelectedDayOfMonth(1)
    }
  }, [selectedMonthIndex])

  // Effect to load tasks when date changes
  useEffect(() => {
    if (selectedDayOfMonth) {
      const date = new Date(selectedYear, selectedMonthIndex, selectedDayOfMonth);
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).replace(/,/g, '');
      loadTasksForSelectedDate(formattedDate);
    }
  }, [selectedDayOfMonth, selectedMonthIndex, selectedYear]);
  

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
                const dayOfWeekIndex = date.getDay();
                
                // Format date to match "Aug 26 2025" format
                const formattedDate = date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                }).replace(/,/g, '');

                // Count tasks for this date using filter
                const taskCount = tasksByDate.get(formattedDate) || 0;
                
                return (
                  <div
                    className={` w-full h-full rounded-md p-2 ${selectedDayOfMonth === dayNumber ? "bg-primary border-primary" : "bg-background border-primary/20"} border duration-200 hover:border-primary flex flex-col items-start justify-between`}
                    key={dayNumber}
                    onClick={() => setSelectedDayOfMonth(dayNumber)}
                  >
                    <p className='font-medium text-xs'>
                      {dayNames[dayOfWeekIndex].abrName} {dayNumber}
                    </p>
                    <div className='w-full flex-row flex gap-1'>
                      {taskCount > 0 && (
                        <>
                          {Array.from({ length: Math.min(taskCount, 3) }, (_, dotIndex) => (
                            <span
                              key={dotIndex}
                              className={`${selectedDayOfMonth === dayNumber ? "text-background" : "text-primary"}`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"/>
                              </svg>
                            </span>
                          ))}
                          {taskCount > 3 && (
                            <span className="text-xs text-dimText">+{taskCount - 3}</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>

        {/* selected date Tasks */}
        <div
          className={`col-span-5 ${tasksView ? "flex flex-col" : "flex items-center justify-center"} gap-5 row-span-11 bg-secondBackground rounded-md p-5`}
        >

          <div
            className={`${tasksView ? "block" : "hidden"} font-semibold text-xl flex flex-row items-center gap-1  `}
          >
            <p>
              {dayNames[new Date(selectedYear, selectedMonthIndex, selectedDayOfMonth).getDay()].abrName }
            </p>
            <p>
              {formatDate(selectedYear, selectedMonthIndex, selectedDayOfMonth)}
            </p>
          </div>

          <div
            className={`${tasksView ? "flex flex-col gap-4 overflow-y-scroll" : "hidden"} scrollbar-hide`}
          >
            {
              tasksForSelectedDate.map((task) => (
                <TaskCard
                  key={task.taskId}
                  name={task.name}
                  priority={task.priority}
                  description={task.description}
                  teamMembers={getSpecificUsers(task.teamIds)}
                />
              ))
            }
          </div>

          {/* data doesnt have any tasks */}
          <div
            className={`${tasksView ? "hidden" : "flex"} flex-col items-center gap-3`}
          >
            <span
              className='p-3 text-primary bg-background rounded-full'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m7 7l-6 6m0-6l6 6"/></g></svg>
            </span>

            <div
              className='flex flex-col gap-2 w-full items-center'
            >
              <h2
                className='text-lg font-bold'
              >
                No tasks
              </h2>
              <p
                className='px-16 text-center text-sm text-dimText'
              >
                Create a project or join a project to view tasks
              </p>
              <button
                className='flex flex-row items-center gap-2 text-xs border border-primary rounded-md px-4 p-2 mt-10 duration-200 hover:bg-primary'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentcolor" strokeLinecap="round" d="M12 3.5v17m8.5-8.5h-17" strokeWidth="2"/></svg>
                <span>
                  Add project
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default CalendarPage