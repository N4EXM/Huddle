import React, {useState, useEffect} from 'react'
import { useMock } from '../../context/MockContext'

const TaskCard = ({ task, handleSelectedTask  }) => {

    const { getSpecificUsers } = useMock()

    const [priorityId, setPriorityId] = useState(0)
    const [members, setMembers] = useState(getSpecificUsers(task.teamIds)|| [])
    const [overlapAmount, setOverlapAmount] = useState(members.length + 1)
    const [completion, setCompletion] = useState(task.completed)

    const priorityColours = [
        { 
            id: 0, 
            priority: "High",
        },
        {
            id: 1, 
            priority: "Medium",
        },
        {
            id: 2, 
            priority: "Low",
        },
    ]

    const handlePriorityColour = () => {

        for (let i = 0; i < priorityColours.length; i++ ) {
            if (task.priority === priorityColours[i].priority) {
            setPriorityId(priorityColours[i].id)
            }
        }

    }
    
    const truncateText = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }
    
    useEffect(() => {
        handlePriorityColour()
    }, [])

  return (
    <div
        className='flex flex-col gap-4 w-full min-h-56 bg-background rounded-md p-5'
    >

        {/* title and priority */}
        <div
            className='flex flex-col gap-4 w-full h-fit cursor-pointer'
            onClick={handleSelectedTask}
        >
            <div
                className='flex flex-row items-start justify-between w-full min-h-12'
            >
                <h1
                    className='font-semibold pr-12'
                >
                    {truncateText(task.name, 40)}
                </h1>
                <p
                        className={`${priorityId === 0 && "bg-red-300 text-red-700"} ${priorityId === 1 && "bg-yellow-200 text-yellow-700"} ${priorityId === 2 && "bg-blue-300 text-blue-700"} p-1 px-3 rounded-full text-xs font-medium`}
                    >
                        {task.priority}
                </p>
            </div>
            {/* separator and description */}
            <div
                className='flex flex-col gap-2 h-full '
            >
                <span className='w-full h-[0.1rem] bg-thirdBackground'></span>
                <p
                    className='text-xs text-dimText'
                >
                    {truncateText(task.description, 120)}
                </p>
            </div>
        </div>

        <div
            className='w-full h-full flex items-end justify-end'
        >
            {/* teams and checkbox */}
            <div
                className='flex flex-row items-center justify-between w-full h-fit'
            >
                {/* team */}
                <div
                    className='relative w-fit flex items-center justify-start'
                >
                    {members.slice(0,4).map((member, index) => {
                    return (
                        <img 
                        key={index + 1}
                        className={`max-w-6 w-6 h-6 max-h-6 absolute z-10 rounded-full border-2 border-primary object-fit object-center`}
                        style={{ left: `${index * 15}px` }}
                        src={member.image} 
                        alt="" 
                        />    
                    )
                    })}
                    <p
                    className={`absolute z-10 w-fit text-sm font-medium top-0.5 ${members.length > 4 ? "block" : "hidden"}`}
                    style={{ left: `${overlapAmount * 15}px` }}              
                    >
                    {members.length}+ 
                    </p>
                </div>

                {/* checkbox */}
                <button
                    className={`flex items-center justify-center ${completion ? "text-primary" : ""} w-8 rounded h-8 border border-primary cursor-pointer`}
                    onClick={() => setCompletion(!completion)}
                >
                    {
                        completion
                        && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentcolor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"/></svg>
                        
                    }
                </button>
            </div>
            
        </div>

    </div>
  )
}

export default TaskCard