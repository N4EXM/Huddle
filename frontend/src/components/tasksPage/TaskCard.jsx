import React from 'react'

const TaskCard = ({id, name, description, date, priority, completed, projectId}) => {

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

  return (
    <div
        className='flex flex-col gap-3 w-full min-h-56 bg-background rounded-md p-4'
    >

        {/* title */}
        <h1
            className='font-semibold pr-5 text-teal-50'
        >
            {name}
        </h1>

        {/* date and team */}
        <div
            className='flex flex-row items-center justify-between'
        >
            <p
                className='text-xs font-medium text-dimText'
            >
                {date}
            </p>
            <div>

            </div>
        </div>

    </div>
  )
}

export default TaskCard