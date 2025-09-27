import React, { useState } from 'react'

const TaskMenu = ({selectedTask}) => {

    // toggles
    const [isEdit, setIsEdit] = useState(false)

    // state
    const [taskId, setTaskId] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [priority, setPriority] = useState("")
    const [teamIds, setTeamIds] = useState([])
    const [completed, setCompleted] = useState(false)
    const [projectId, setProjectId] = useState(null)


  return (
    <div>TaskMenu</div>
  )
}

export default TaskMenu