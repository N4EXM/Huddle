import React, { useEffect, useState } from 'react'

const ProjectCard = ({name, priority, description, percentage, date, projectLeaderId, teamIds}) => {

  const [priorityId, setPriorityId] = useState(0)

  const priorityColours = [
    { 
      id: 0, 
      priority: "High",
      bgColour: "#fca5a5",
      textColour: "#ef4444"
    },
    {
      id: 1, 
      priority: "Medium",
      bgColour: "#fdba74",
      textColour: "#fb923c"
    },
    {
      id: 2, 
      priority: "Low",
      bgColour: "#93c5fd",
      textColour: "#3b82f6"
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
    console.log(priorityId)
    console.log(priorityColours[priorityId].bgColour)
  }, [priorityId])

  return (
    <div
      className='flex flex-col gap-4 w-full bg-background min-h-54 rounded-lg p-5'
    >
      
      <div
        className='flex flex-col gap-3'
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
          {truncateText(description, 160)}
        </p>
      </div>
      

    </div>
  )
}

export default ProjectCard