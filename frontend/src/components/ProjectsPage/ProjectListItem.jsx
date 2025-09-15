import React, { useEffect, useState } from 'react'
import ProgressBar from '../General/ProgressBar'

const ProjectListItem = ({ name, priority, percentage, date, projectLeaderId, teamMembers }) => {

    const [priorityId, setPriorityId] = useState(0)
    const [overlapAmount] = useState(teamMembers.length + 1)
    const [members, setMembers] = useState(teamMembers || [])
    
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
          if (priority === priorityColours[i].priority) {
            setPriorityId(priorityColours[i].id)
          }
        }
    
    }

    useEffect(() => {
        handlePriorityColour()
    }, [])

  return (
    <div
        className='grid grid-cols-5 items-center justify-between bg-background p-4 px-6 rounded-md text-sm'
    >
        
        {/* title */}
        <p
            className='font-bold'
        >
            {name}
        </p>

        {/* team */}
        <div
            className='relative w-full flex items-center justify-center'
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
            className={`absolute z-10 w-fit text-sm font-medium top-0.5 ${teamMembers.length > 4 ? "block" : "hidden"}`}
            style={{ left: `${overlapAmount * 15}px` }}              
        >
            {teamMembers.length}+ 
        </p>
        </div>

        {/* progress and percentage */}
        <div
            className='flex flex-row items-center gap-2 w-fit'
        >
            <div
                className='w-32'
            >
                <ProgressBar
                    progress={percentage}
                />
            </div>
            
            <p
                className='text-xs text-dimText'
            >
                {percentage}%
            </p>
        </div>

        {/* date */}
        <div
            className='flex items-end justify-end'
        >
            <p
                className='text-xs text-dimText'
            >
                {date}
            </p>
        </div>
        

        {/* priority */}
        <div
            className='flex items-end justify-end'
        >
            <p
                className={`${priorityId === 0 && "bg-red-300 text-red-700"} ${priorityId === 1 && "bg-yellow-200 text-yellow-700"} ${priorityId === 2 && "bg-blue-300 text-blue-700"} p-1 px-3 rounded-full text-xs font-medium`}
            >
                {priority}
            </p>
        </div>
        

    </div>
  )
}

export default ProjectListItem