import React, { useState, useRef } from 'react'
import Calendar from '../General/Calendar'
import { useAutoResizeTextarea } from '../../hooks/useAutoResizeTextarea'
import TaskCard from '../TasksPage/TaskCard'
import { getSpecificUsers } from '../../utils/userUtils'
import { useMock } from '../../context/MockContext'
import NewTaskMenu from './NewTaskMenu'
import { generateRandomId } from '../../utils/dataUtils'
import { getDatePriority } from '../../utils/dateUtils'
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

const NewProjectMenu = ({ setToggleOverlay }) => {

    // context
    const { users, setProjects, setTasks, projects, tasks } = useMock()
    const { user } = useAuth()

    // toggles
    const [isCalendarActive, setIsCalendarActive] = useState(false)
    const [openNewTaskMenu, setOpenNewTaskMenu] = useState(false)

    // state
    const [projectId, setProjectId] = useState("")
    const [view, setView] = useState("details") //  details |  tasks
    const [projectName, setProjectName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [newTasks, setNewTasks] = useState([])

    // btns
    const viewBtns = ["details", "tasks"]

    // refs
    const textAreaRef = useAutoResizeTextarea(description) // textArea hook

    // functions
    const handleClosePage = () => {

        setProjectName("")
        setDueDate("")
        setDescription("")
        setNewTasks([])
        setToggleOverlay(false)
        setIsCalendarActive(false)
        setOpenNewTaskMenu(false)

    }

    const handleCreateProject = () => {

        const newProject = {
            projectId: projectId,
            name: projectName,
            description: description,
            priority: getDatePriority(dueDate),
            projectLeaderId: user.userId,
            percentage: 0,
            date: dueDate,
            teamIds: [0 ,2 ,3],
        }

        setProjects([...projects, newProject])
        setTasks(prevTasks => [...prevTasks, ...newTasks])

        handleClosePage()

    }

    const handleAddNewTask = (name, description, date, members) => {

        const newTask = {
            taskId: generateRandomId(),
            name: name,
            description: description,
            date: date,
            teamIds: members,
            priority: getDatePriority(date),
            completed: false,
            projectId: projectId
        }

        setNewTasks([...newTasks, newTask]) 
    }

    useEffect(() => {
        setProjectId(generateRandomId())
    }, [])

  return (
    <>
        <div
            className={`bg-secondBackground rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh]`}
        >

            <div
                className={`p-5  flex flex-col gap-8 w-full h-full scrollbar-hide overflow-y-scroll`}
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

                {/* view buttons */}
                <div
                    className='flex flex-row items-center gap-2 w-full h-fit'
                >
                    {
                        viewBtns.map((viewBtn, index) => (
                            <button
                                key={index}
                                className={`p-2 px-3 bg-background border-2 border-background ${viewBtn === view && "border-b-primary text-primary"} rounded-md rounded-b-none text-xs font-medium duration-200`}
                                onClick={() => setView(viewBtn)}
                            >   
                                {viewBtn}
                            </button>
                        ))
                    }
                </div>

                {
                    view === "details"
                    ?   <div
                            className='flex flex-col gap-10 px-2 h-fit w-full scrollbar-hide'
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
                                className='flex flex-col gap-4 w-full h-fit '
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
                                        Project description: 
                                    </p>
                                    <textarea
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text"
                                        value={description}
                                        className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary resize-none rounded-md text-xs w-full scrollbar-hide bg-background min-h-40'
                                        placeholder='Enter your projects description...'
                                        required
                                    ></textarea>
                                </div>

                            </div>
                        </div>
                    
                    :   <div
                            className='flex flex-col gap-5 w-full h-full overflow-y-scroll scrollbar-hide'
                        >
                            
                            {/* title */}
                            <div
                                className='flex flex-col gap-1'
                            >
                                <h1
                                    className='font-semibold text-xl'
                                >
                                    Tasks
                                </h1>
                                <span className='w-full h-0.5 bg-primary rounded-md'></span>
                            </div>

                            <div
                                className='flex flex-col gap-4 w-full h-fit'
                            >
                                {
                                    newTasks.length > 0 
                                    ? newTasks.map((task, index) => (
                                            <div
                                                className='flex flex-row items-start justify-start gap-5'
                                                key={task.taskId}
                                            >
                                                <p
                                                    className='flex items-center justify-center w-8 h-7 px-0.5 bg-background rounded-full border-2 border-primary text-xs mt-4'
                                                >
                                                    {index + 1}
                                                </p>
                                                <TaskCard
                                                    id={task.taskId}
                                                    name={task.name}
                                                    description={task.description}
                                                    date={task.date}
                                                    priority={task.priority}
                                                    completed={task.completed}
                                                    projectId={task.projectId}
                                                    teamMembers={getSpecificUsers(task.teamIds, users)}
                                                />
                                            </div>
                                        )) 
                                    :   <div
                                            className={`flex flex-col items-center gap-3 w-full h-full justify-center min-h-[55vh] bg-background rounded-md`}
                                        >
                                            <span
                                                className='p-3.5 text-primary bg-secondBackground rounded-full'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m7 7l-6 6m0-6l6 6"/></g></svg>
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
                                                className='px-20 text-center text-sm text-dimText'
                                            >
                                                Create a task to view the contents of the task
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div> 
                }

            
                {
                    view === "details"
                    ?   <div
                            className={`${view === "details" ? "flex" : "hidden"} w-full h-full flex-row items-center gap-2 justify-end bg-secondBackground rounded-b-md`}
                        >
                            <button
                                className={`${projectName === "" || dueDate === "" || description === "" || newTasks.length <= 0 ? "hidden" : "flex"} p-2 bg-background hover:bg-primary duration-200 border-primary border-2 rounded-full`}      
                                onClick={() => handleCreateProject()}     
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14l4 4L19 8" />
                                </svg>
                            </button> 
                        </div>
                    :   <div
                            className={`${view === "tasks" ? "flex" : "hidden"} w-full h-fit flex-row items-center gap-2 justify-end bg-secondBackground rounded-b-md`}
                        >
                            <button
                                className={`p-2 bg-background hover:bg-primary duration-200 border-primary border-2 rounded-full `}     
                                onClick={() => setOpenNewTaskMenu(true)}      
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4.5v15m7.5-7.5h-15"/></svg>
                            </button> 
                        </div>
                }

            </div>

        </div>
        <NewTaskMenu
            openNewTaskMenu={openNewTaskMenu}
            setOpenNewTaskMenu={setOpenNewTaskMenu}
            handleAddNewTask={handleAddNewTask}
        />
    </>
    

  )
}

export default NewProjectMenu