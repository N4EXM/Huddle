import React, { useState } from 'react'

const ProjectMenu = ({ setToggleOverlay, isSelectedProjectActive, setIsSelectedProjectActive, selectedProject }) => {

    // toggles
    const [isEdit, setIsEdit] = useState(false)

    // state
    const [view, setView] = useState("details")
    const [viewBtns] = useState(["details", "tasks"])
    
    const [projectId, setProjectId] = useState(selectedProject.projectId)
    const [name,setName] = useState(selectedProject.name)
    const [description, setDescription] = useState(selectedProject.description)
    const [priority, setPriority] = useState(selectedProject.priority)
    const [projectLeaderId, setProjectLeaderId] = useState(selectedProject.projectLeaderId)
    const [percentage, setPercentage] = useState(selectedProject.percentage)
    const [date, setDate] = useState(selectedProject.date)
    const [teamIds, setTeamIds] = useState(selectedProject.teamIds) 

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

  return (
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
                    className='px-2 flex flex-col w-full h-full gap-5'
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

                                        {/* status */}
                                        <div
                                            className='w-56 flex flex-row items-center justify-between'
                                        >
                                            <div
                                                className='flex flex-row items-center gap-2 text-slate-200/70'
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
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
                                                    className='text-xs'
                                                >
                                                    In progress
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                        :   <div>
                                tasks
                            </div>
                    }
                </div>

            </div>
        </div>
        )
}

export default ProjectMenu