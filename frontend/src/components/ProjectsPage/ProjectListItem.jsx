import React, { useEffect, useState } from 'react'
import ProgressBar from '../General/ProgressBar'
import { useMock } from '../../context/MockContext'

const ProjectListItem = ({ project, handleSelectedProject }) => {

    const { getSpecificUsers } = useMock()

    const [priorityId, setPriorityId] = useState(0)
    const [members, setMembers] = useState(getSpecificUsers(project.teamIds) || [])
    const [overlapAmount] = useState(members.length + 1)
    
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
            if (project.priority === priorityColours[i].priority) {
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
        className='grid grid-cols-5 items-center cursor-pointer justify-between bg-background p-4 px-6 rounded-md text-sm'
        onClick={handleSelectedProject}
    >
        
        {/* title */}
        <p
            className='font-bold'
        >
            {truncateText(project.name, 25)}
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
            className={`absolute z-10 w-fit text-sm font-medium top-0.5 ${members.length > 4 ? "block" : "hidden"}`}
            style={{ left: `${overlapAmount * 15}px` }}              
        >
            {members.length}+ 
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
                    progress={project.percentage}
                />
            </div>
            
            <p
                className='text-xs text-dimText'
            >
                {project.percentage}%
            </p>
        </div>

        {/* date */}
        <div
            className='flex items-end justify-end'
        >
            <p
                className='text-xs text-dimText'
            >
                {project.date}
            </p>
        </div>
        

        {/* priority */}
        <div
            className='flex items-end justify-end'
        >
            <p
                className={`${priorityId === 0 && "bg-red-300 text-red-700"} ${priorityId === 1 && "bg-yellow-200 text-yellow-700"} ${priorityId === 2 && "bg-blue-300 text-blue-700"} p-1 px-3 rounded-full text-xs font-medium`}
            >
                {project.priority}
            </p>
        </div>
        

    </div>
  )
}

export default ProjectListItem