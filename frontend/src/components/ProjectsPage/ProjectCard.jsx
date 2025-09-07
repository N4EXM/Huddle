import React, { useEffect, useState } from 'react'
import ProgressBar from '../General/ProgressBar'

const ProjectCard = ({name, priority, description, percentage, date, projectLeaderId, teamMembers}) => {

  const [priorityId, setPriorityId] = useState(0)
  const [overlapAmount, setOverlapAmount] = useState(teamMembers.length + 1)
  const [members, setMembers] = useState(teamMembers || [])

  const priorityColours = [
    { 
      id: 0, 
      priority: "High",
      bgColour: "#fca5a5",
      textColour: "#dc2626"
    },
    {
      id: 1, 
      priority: "Medium",
      bgColour: "#fdba74",
      textColour: "#ca8a04"
    },
    {
      id: 2, 
      priority: "Low",
      bgColour: "#93c5fd",
      textColour: "#2563eb"
    },
  ]

  const handlePriorityColour = () => {

    for (let i = 0; i < priorityColours.length; i++ ) {
      if (priority === priorityColours[i].priority) {
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

  useEffect(() => {
    console.log(members)
  }, [members])

  return (
    <div
      className='flex flex-col gap-5 w-full bg-background min-h-54 rounded-lg p-5'
    >
      
      {/* title, desc, priority */}
      <div
        className='flex flex-col gap-3 h-full'
      >
        <div
          className='flex flex-row items-center justify-between w-full'
        >
          <h1
            className='text-xl font-semibold'
          >
            {name}
          </h1>
          <p
            className={`${priorityId === 0 && "bg-red-300 text-red-500"} ${priorityId === 1 && "bg-yellow-200 text-yellow-500"} ${priorityId === 2 && "bg-blue-300 text-blue-500"} p-1 px-3 rounded-full text-xs font-medium`}
          >
            {priority}
          </p>
        </div>  
        <p
          className='text-dimText text-sm pr-14'
        >
          {truncateText(description, 110)}
        </p>
      </div>
      
      {/* team and percentage and date */}
      <div
        className='flex flex-col gap-2 w-full h-fit'
      >

        {/* team and percentage */}
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
                  className={`max-w-6 w-6 h-6 max-h-6 absolute z-10 rounded-full border border-primary object-fit object-center`}
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

          <p
            className='text-sm text-dimText'
          >
            {percentage}%
          </p>

        </div>

        {/* progress bar and date */}
        <div
          className='flex flex-col items-end justify-end gap-1 w-full h-full'
        >
          <ProgressBar
            progress={percentage}
          />

          <p
            className='text-xs text-dimText'
          >
            {date}
          </p>

        </div>

      </div>

    </div>
  )
}

export default ProjectCard