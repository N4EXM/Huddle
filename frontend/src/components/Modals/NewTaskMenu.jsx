import React, { useEffect, useMemo, useState } from 'react'
import TeamSearchBar from '../General/TeamSearchBar'
import Calendar from '../General/Calendar'
import TeamMemberCard from '../General/TeamMemberCard'
import { useMock } from '../../context/MockContext'
import { data } from 'react-router-dom'

const NewTaskMenu = ({handleAddNewTask, openNewTaskMenu, setOpenNewTaskMenu}) => {

    const { users } = useMock()

    // toggles
    const [isCalendarActive, setIsCalendarActive] = useState(false)

    // state
    const [name, setName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [teamMembers, setTeamMembers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [debounceTerm, setDebounceTerm] = useState("")
    const [membersId, setMembersId] = useState([])

    // functions
    const handleClosePage = () => {

        setName("")
        setDueDate("")
        setDescription("")
        setTeamMembers([])
        setMembersId([])
        setIsCalendarActive(false)

        setOpenNewTaskMenu(false)

    }

    const handleAddMember = (user) => {
        if (!teamMembers.includes(user)) {
            setTeamMembers([...teamMembers, user])
            setMembersId([...membersId, user.userId])
            setSearchQuery("")
        }
        else {
            setSearchQuery("")
        }
    }

    const handleRemoveMember = (userId) => {
        setTeamMembers(prevMembers => prevMembers.filter(member => member.userId !== userId))
    }

    const handleNewTask = () => {

        handleAddNewTask(name, description, dueDate, membersId)
        handleClosePage()

    }

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.name.toLowerCase().includes(debounceTerm.toLowerCase()))
    }, [users, debounceTerm])

    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(searchQuery);
        }, 300); // 300ms delay

        return () => clearTimeout(timerId);
    }, [searchQuery])

    // useEffect(() => {
    //     console.log(membersId)
    // }, [membersId])
    

  return (
    <div
        className={`bg-secondBackground  rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh] ${openNewTaskMenu ? "flex" : "hidden"}`}
    >
        <div
            className='p-5 flex flex-col gap-8 w-full h-full  overflow-y-scroll scrollbar-hide'
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
                        className='p-3 placeholder:text-dimText outline-none font-medium border-2 border-primary resize-none rounded-md text-xs w-full scrollbar-hide bg-background min-h-40'
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
                    
                    <TeamSearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filteredUsers={filteredUsers}
                        handleAddMember={handleAddMember}
                    />
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
                        className='flex flex-col gap-2 w-full h-full'
                    >
                        {
                            teamMembers.length > 0 
                            ?   teamMembers.map((member) => (
                                    <TeamMemberCard
                                        key={member.taskId}
                                        userId={member.userId}
                                        image={member.image}
                                        name={member.name}
                                        email={member.email}
                                        handleRemoveMember={handleRemoveMember}
                                    />
                                ))
                            :   <div
                                    className='flex flex-col gap-4 w-full h-full bg-background rounded-md items-center justify-center m-auto p-5 min-h-52'
                                >
                                    
                                    <i
                                        className='p-3 rounded-full bg-secondBackground text-primary'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                <path fill="currentcolor" d="M11 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7M4.413 17.601c-.323.41-.413.72-.413.899c0 .122.037.251.255.426c.249.2.682.407 1.344.582C6.917 19.858 8.811 20 11 20q.333 0 .658-.005a1 1 0 0 1 .027 2Q11.345 22 11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1-.211 1.989Q11.564 15 11 15c-2.023 0-3.843.59-5.136 1.379c-.647.394-1.135.822-1.45 1.222Zm12.173-2.43a1 1 0 0 0-1.414 1.415L16.586 18l-1.414 1.414a1 1 0 1 0 1.414 1.414L18 19.414l1.414 1.414a1 1 0 1 0 1.414-1.414L19.414 18l1.414-1.414a1 1 0 0 0-1.414-1.414L18 16.586z" />
                                            </g>
                                        </svg>
                                    </i>
                                    <div
                                        className='flex flex-col gap-1 items-center justify-center text-center'
                                    >
                                        <h1
                                            className='font-semibold'
                                        >
                                            No members
                                        </h1>
                                        <p
                                            className='text-dimText font-medium text-xs px-10'
                                        >
                                            No members are associated with this task
                                        </p>
                                    </div>
                                </div>
                        }
                    </div>

                </div>

                {/* completion button */}
                <div
                    className='flex items-end justify-end w-full h-fit'
                >
                    <button
                        className={`${name === "" || dueDate === "" || description === "" || teamMembers.length <= 0 ? "hidden" : "flex"} p-2 bg-background hover:bg-primary duration-200 border-primary border-2 rounded-full`}    
                        onClick={() => handleNewTask()}       
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14l4 4L19 8" />
                        </svg>
                    </button> 
                </div>

            </div>

        </div>

    </div>
  )
}

export default NewTaskMenu