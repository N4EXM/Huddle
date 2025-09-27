import React, { useEffect, useState } from 'react'
import { useMock } from '../../context/MockContext'
import ProgressBar from '../General/ProgressBar'
import TaskCard from '../TasksPage/TaskCard'

const ProjectMenu = ({ setToggleOverlay, isSelectedProjectActive, setIsSelectedProjectActive, selectedProject }) => {

    // context
    const { getSpecificUsers, tasks, users } = useMock()

    // toggles
    const [isEdit, setIsEdit] = useState(false)

    // state
    const [view, setView] = useState("details")
    const [viewBtns] = useState(["details", "tasks"])
    
    const [projectId, setProjectId] = useState(null)
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [projectLeaderId, setProjectLeaderId] = useState(null)
    const [percentage, setPercentage] = useState(0)
    const [date, setDate] = useState("")
    const [teamMembers, setTeamMembers] = useState([]) 
    const [currentTasks, setCurrentTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState({})

    // functions 
    const handleClosePage = () => {
        setIsSelectedProjectActive(false)
        setToggleOverlay(false)
    }

    const truncateText = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }

    const handleFilteringTasks = () => {
        let newTasks = tasks.filter(task => task.projectId === selectedProject.projectId)
        return newTasks
    }

    // loads the data to the state
    useEffect(() => {
        setProjectId(selectedProject.projectLeaderId)
        setName(selectedProject.name)
        setDescription(selectedProject.description)
        setPriority(selectedProject.priority)
        setProjectLeaderId(selectedProject.projectLeaderId)
        setPercentage(selectedProject.percentage)
        setDate(selectedProject.date)
        setTeamMembers(selectedProject.teamMembers)
        setCurrentTasks(handleFilteringTasks())

    }, [selectedProject])

    useEffect(() => {
        console.log("projectId",projectId)
        console.log("name:", name)
        console.log("description:", description)
        console.log("priority:",priority)
        console.log("projectLeaderId:",projectLeaderId)
        console.log("percentage:",percentage)
        console.log("date:",date)
        console.log(currentTasks)
        // console.log("teamIds:", teamMembers)
    }, [projectId])

  return (
        <>
            <div
                className={`${isSelectedProjectActive ? "flex" : "hidden"} bg-secondBackground rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh]`}
            >
                <div
                    className={`p-5  flex flex-col gap-4 w-full h-full scrollbar-hide overflow-y-scroll`}
                >
                    {/* close button and edit buttons */}
                    <div
                        className={`duration-300 flex flex-row w-full items-center justify-between`}
                    >
                        <button
                            className='p-1 rounded-full bg-background duration-200 hover:bg-primary hover:text-background'
                            onClick={() => handleClosePage()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
                        </button>
                        <button
                            className={`${view === "tasks" ? "opacity-0" : "opacity-100"} cursor-pointer p-2 rounded-full text duration-200 hover:bg-primary hover:text-background bg-secondBackground`}
                            onClick={() => setIsEdit(!isEdit)}
                            disabled={view === "tasks"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div
                        className='px-2 flex flex-col w-full h-full gap-10'
                    >
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

                        {/* views */}
                        {
                            view === "details"
                            ?   isEdit 
                                ?   <div>
                                        hi 2
                                    </div>
                                :   <div
                                        className='flex flex-col gap-10 w-full h-[90vh]'
                                    >
                                        <h1
                                            className='text-3xl font-bold'
                                        >
                                            {truncateText(name, 90)}
                                        </h1>

                                        {/* minor details */}
                                        <div
                                            className='w-full flex flex-col gap-4 h-fit'
                                        >

                                            {/* priority */}
                                            <div
                                                className='w-64 grid grid-cols-2 items-center justify-between'
                                            >
                                                <div
                                                    className='flex flex-row items-center gap-2 text-slate-200/70'
                                                >
                                                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                        <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" />
                                                    </svg>
                                                    <p className='font-medium text-sm'>
                                                        Status
                                                    </p>
                                                </div>
                                                <div
                                                    className='bg-blue-300 text-blue-600 p-1 rounded-full px-2 w-fit flex flex-row items-center gap-2'
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                        <g fill="none">
                                                            <path fill="currentcolor" d="M19 5H5v9h14z" />
                                                            <path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20v-6m0-9h14v9H5m0-9v9m0-9V4" />
                                                        </g>
                                                    </svg>
                                                    <p
                                                        className='text-xs font-medium'
                                                    >
                                                        In progress
                                                    </p>
                                                </div>
                                            </div>

                                            {/* status */}
                                            <div
                                                className='w-64 grid grid-cols-2 items-center justify-between'
                                            >
                                                <div
                                                    className='flex flex-row items-center gap-2 text-slate-200/70'
                                                >
                                                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                        <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" />
                                                    </svg>
                                                    <p className='font-medium text-sm'>
                                                        Status
                                                    </p>
                                                </div>
                                                <div
                                                    className='bg-blue-300 text-blue-600 p-1 rounded-full px-2 w-fit flex flex-row items-center gap-2'
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                        <g fill="none">
                                                            <path fill="currentcolor" d="M19 5H5v9h14z" />
                                                            <path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20v-6m0-9h14v9H5m0-9v9m0-9V4" />
                                                        </g>
                                                    </svg>
                                                    <p
                                                        className='text-xs font-medium'
                                                    >
                                                        In progress
                                                    </p>
                                                </div>
                                            </div>

                                            {/* date */}
                                            <div
                                                className='w-64 grid grid-cols-2 items-center justify-between'
                                            >
                                                <div
                                                    className='flex flex-row items-center gap-2 text-slate-200/70'
                                                >
                                                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
                                                    <p className='font-medium text-sm'>
                                                        Due Date
                                                    </p>
                                                </div>
                                                <p
                                                    className='text-xs font-medium pl-1'
                                                >
                                                    {date}
                                                </p>
                                            </div>

                                            {/* teammates */}
                                            <div
                                                className='w-full flex flex-row gap-8 items-center justify-between'
                                            >
                                                <div
                                                    className='flex flex-row items-center gap-2 text-slate-200/70'
                                                >
                                                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M17.254 11a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V13.25a2.25 2.25 0 0 1 2.25-2.25zm0 1.5h-6.502a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V13.25a.75.75 0 0 0-.75-.75M4.25 11h4.156a3.24 3.24 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v5.249a3 3 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.5 4.5 0 0 1 2 18.499V13.25A2.25 2.25 0 0 1 4.25 11m19.5 0A2.25 2.25 0 0 1 26 13.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 24.5 18.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.24 3.24 0 0 0 19.6 11zM14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6M14 4.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.003 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-16.006 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></svg>
                                                    <p className='font-medium text-sm'>
                                                        Assignee
                                                    </p>
                                                </div>
                                                <div
                                                    className='flex flex-row gap-4 items-center w-full overflow-x-scroll scrollbar-hide pl-2 '
                                                >
                                                    {
                                                        teamMembers.length > 0 
                                                        ?   teamMembers.map((member, index) => {
                                                                return (
                                                                    <div
                                                                        className='flex flex-row items-center gap-2 rounded-full w-full '
                                                                        key={index + 1}
                                                                    >
                                                                        <img 
                                                                            className={`max-w-8 w-8 h-6 max-h-6 rounded-full border-2 border-primary object-fit object-center`}
                                                                            src={member.image} 
                                                                            alt="" 
                                                                        />
                                                                        <p
                                                                            className='text-xs font-medium w-full text-nowrap'
                                                                        >
                                                                            {member.name}
                                                                        </p>
                                                                    </div>
                                                                        
                                                                )
                                                            }) 
                                                        :   <div
                                                                className='text-xs bg-background p-2 rounded-md w-fit font-medium h-fit'
                                                            >
                                                                no current members
                                                            </div>
                                                    }
                                                </div>
                                            </div>

                                        </div>

                                        {/* description */}
                                        <div
                                            className='w-full h-fit flex flex-col gap-2'
                                        >
                                            <div
                                                className='flex flex-row items-center gap-2 text-slate-100/70'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m0 4a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75"/><path fill="currentColor" fillRule="evenodd" d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25z" clipRule="evenodd"/></svg>
                                                <p
                                                    className='text-sm font-medium'
                                                >
                                                    description
                                                </p>
                                            </div>
                                            <div>

                                            </div>
                                            <p
                                                className='text-sm p-3 bg-background rounded-md min-h-40'
                                            >
                                                {description}
                                            </p>
                                        </div>

                                        {/* project completion */}
                                        <div
                                            className='p-3 rounded-md bg-background flex flex-col gap-4'
                                        >
                                            <p
                                                className='font-medium text-lg'
                                            >
                                                Project Completion
                                            </p>
                                            <div
                                                className='flex flex-col gap-2 w-full h-fit'
                                            >
                                                <ProgressBar
                                                    progress={percentage}
                                                />
                                                <p
                                                    className='text-dimText text-xs font-medium'
                                                >
                                                    The Project has been <span className='text-primary'>{percentage}% completed.</span> Only <span className='text-primary'>{100 - percentage}% is remaining</span>.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                            :       <div
                                        className='flex flex-col gap-5 w-full h-full  '
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
                                                currentTasks.length > 0 
                                                ? currentTasks.map((task, index) => (
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
                                                                teamMembers={getSpecificUsers(task.teamIds)}
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
                            </div>

                </div>
            </div>
        </>
        )
}

export default ProjectMenu