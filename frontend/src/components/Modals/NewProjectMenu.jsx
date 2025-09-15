import React, { useState } from 'react'
import { useMenu } from '../../context/MenuContext'
import Calendar from '../General/Calendar'

const NewProjectMenu = () => {

    const { setNewOpenProjectMenu } = useMenu()

    // toggles
    const [isCalendarActive, setIsCalendarActive] = useState(false)

    // state
    const [projectName, setProjectName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState([])

    const handleClosePage = () => {

        setProjectName("")
        setDueDate("")
        setDescription("")
        setTasks([])
        setIsCalendarActive(false)

        setNewOpenProjectMenu(false)

    }


  return (
    <div
        className={`p-5 bg-secondBackground rounded-md border-2 border-thirdBackground/40 flex flex-col gap-10 shadow-2xl col-start-3 w-full h-full`}
    >
        {/* close button */}
        <div
            className={`duration-300 flex flex-row w-full items-center justify-between`}
        >
            <button
                className='p-1 rounded-full bg-background duration-200 hover:bg-primary'
                onClick={() => handleClosePage()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
            </button>
        </div>

        <div
            className='flex flex-col gap-10 overflow-y-scroll px-2 h-full w-full scrollbar-hide'
        >
            {/* title */}
            <div
                className='flex flex-col gap-2'
            >
                <h1
                    className='font-semibold text-2xl'
                >
                    New Project
                </h1>
                <p
                    className='text-sm font-medium text-dimText pr-8'
                >
                    Enter details into the field to create a new project.
                </p>
            </div>

            {/* name, date and description */}
            <div
                className='flex flex-col gap-4'
            >

                {/* name */}
                <div
                    className='flex flex-col gap-1.5'
                >
                    <p
                        className='font-medium text-sm pl-3'
                    >
                        Project Name: 
                    </p>
                    <input
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        type="text" 
                        className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary rounded-md text-xs w-full bg-background'
                        placeholder='Enter a name...'
                        required
                    />
                </div>

                {/* name */}
                <div
                    className='flex flex-col gap-1.5 relative'
                >
                    <p
                        className='font-medium text-sm pl-3'
                    >
                        Due Date: 
                    </p>
                    <input
                        value={dueDate}
                        type="text" 
                        className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary rounded-md text-xs w-full bg-background'
                        placeholder='Pick a date...'
                        readOnly
                    />
                    <button
                        className='flex absolute top-[2.15rem] right-2.5 hover:text-primary duration-200'
                        onClick={() => setIsCalendarActive(!isCalendarActive)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g>
                        </svg>
                    </button>
                    <Calendar
                        isCalendarActive={isCalendarActive}
                    />
                </div>

            </div>
        </div>

    </div>
  )
}

export default NewProjectMenu