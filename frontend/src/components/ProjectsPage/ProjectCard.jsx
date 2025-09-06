import React, { useEffect, useState } from 'react'
import { useMock } from '../../context/MockContext'

const ProjectCard = ({name, priority, description, percentage, date, projectLeaderId, teamIds}) => {

  const { getSpecificUsers } = useMock()

  const [priorityId, setPriorityId] = useState(0)
  const [overlapAmount, setOverlapAmount] = useState(0)
  const [members, setMembers] = useState([])

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
    setMembers(getSpecificUsers(teamIds))
  }, [])

  useEffect(() => {
    console.log(members)
  }, [members])

  return (
    <div
      className='flex flex-col gap-4 w-full bg-background min-h-54 rounded-lg p-5'
    >
      
      {/* title, desc, priority */}
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
      
      {/* team and percentage and date */}
      <div
        className='flex flex-col gap-1'
      >

        {/* team and percentage */}
        <div
          className='flex flex-row items-center justify-between w-full h-fit'
        > 

          {/* team */}
          <div
            className='flex flex-row items-center gap-2'
          >
            <div
              className='relative'
            >
              {members.map((member, index) => {
                
                return (
                  <img 
                    key={index + 1}
                    className={`w-6 h-6 absolute z-10`}
                    // style={{ left: `${index * 20}px` }}
                    src={member.image} 
                    alt="" 
                  />
                )
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProjectCard