import React, { useState } from 'react'
import { useModal } from '../../context/ModalContext'
import TeamSearchBar from '../General/TeamSearchBar'
import Calendar from '../General/Calendar'
import TeamMemberCard from '../General/TeamMemberCard'
import { useMock } from '../../context/MockContext'

const NewTaskMenu = () => {

    const { currentTasks, setCurrentTasks, openNewTaskMenu, setOpenNewTaskMenu } = useModal()
    const { users } = useMock()

    // toggles
    const [isCalendarActive, setIsCalendarActive] = useState(false)

    // state
    const [name, setName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [teamMembers, setTeamMembers] = useState(users)

    // functions
    const handleClosePage = () => {

        setName("")
        setDueDate("")
        setDescription("")
        setTeamMembers([])
        setIsCalendarActive(false)

        setOpenNewTaskMenu(false)

    }

    const handleAddMember = () => {

    }

    const handleMemberSearchQuery = () => {

        

    }


  return (
    <div
        className={`bg-secondBackground  rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh] ${openNewTaskMenu ? "flex" : "hidden"}`}
    >

        <div
            className='p-5 pb-20 flex flex-col gap-8 w-full h-full  overflow-y-scroll scrollbar-hide'
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

            {/* input fields and tasks */}
            <div
                className='flex flex-col gap-4 px-2 h-fit w-full scrollbar-hide'
            >
                {/* title */}
                <div
                    className='flex flex-col gap-2'
                >
                    <h1
                        className='font-semibold text-2xl'
                    >
                        New Task
                    </h1>
                    <p
                        className='text-sm font-medium text-dimText pr-8'
                    >
                        Enter details into the field to create a new task.
                    </p>
                </div>

                {/* name */}
                <div
                    className='flex flex-col gap-1.5'
                >
                    <p
                        className='font-medium text-sm pl-3'
                    >
                        Task Name: 
                    </p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary rounded-md text-xs w-full bg-background'
                        placeholder='Enter a name...'
                        required
                    />
                </div>

                {/* date */}
                <div
                    className='flex flex-col gap-1.5 relative h-fit w-full'
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
                        setDueDate={setDueDate}
                        setIsCalendarActive={setIsCalendarActive}
                    />
                </div>

                {/* description */}
                <div
                    className='flex flex-col gap-1.5 h-fit w-full'
                >
                    <p
                        className='font-medium text-sm pl-3'
                    >
                    Task description: 
                    </p>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        value={description}
                        className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary resize-none rounded-md text-xs w-full scrollbar-hide bg-background min-h-40'
                        placeholder='Enter your task description...'
                        required
                    ></textarea>
                </div>


            </div>

            {/* team members */}
            <div
                className='flex flex-col gap-8 w-full h-fit px-2    '
            >   

                {/* search */}
                <div
                    className='flex flex-col gap-4'
                >
                    <div
                        className='flex flex-col gap-0.5 pr-6'
                    >
                        <h1
                            className='font-semibold '
                        >
                            Add team members
                        </h1>
                        <p
                            className='text-xs text-dimText'
                        >
                            Add members to the task to know who is associated with the task.
                        </p>
                    </div>
                    
                    <TeamSearchBar/>
                </div>

                {/* members */}
                <div
                    className='flex flex-col gap-4 w-full h-full'
                >   

                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg'
                        >
                            Team members
                        </h1>
                        <span className='w-full h-0.5 bg-primary rounded-md'></span>
                    </div>

                    <div
                        className='flex flex-col gap-4 w-full h-full'
                    >
                        {
                            teamMembers.map((member) => (
                                <TeamMemberCard
                                    key={member.taskId}
                                    userId={member.userId}
                                    image={member.image}
                                    name={member.name}
                                    email={member.email}
                                />
                            ))
                        }
                    </div>

                </div>

                {/* completion button */}
                <div>
                    <button>

                    </button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default NewTaskMenu