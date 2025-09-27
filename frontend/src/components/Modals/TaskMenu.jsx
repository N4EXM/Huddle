import React, { useEffect, useState } from 'react'
import { useMock } from '../../context/MockContext'

const TaskMenu = ({ selectedTask, setIsSelectedTaskActive }) => {

    // context
    const { getSpecificUsers } = useMock()

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
    const [priorityId] = useState(0)


    useEffect(() => {
      setTaskId(selectedTask.taskId)
      setName(selectedTask.name)
      setDescription(selectedTask.description)
      setDate(selectedTask.date)
      setPriority(selectedTask.priority)
      setTeamIds(getSpecificUsers(selectedTask.teamIds))
      setCompleted(selectedTask.completed)
      setProjectId(selectedTask.projectId)
    }, [selectedTask])

    const handleClosePage = () => {
      setIsSelectedTaskActive(false)
    }

  return (
    <div
      className={`flex bg-secondBackground rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh] pb-10`}
    >
      <div
          className={`p-5 flex flex-col gap-4 w-full h-full scrollbar-hide overflow-y-scroll`}
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
              className={`cursor-pointer p-2 rounded-full text duration-200 hover:bg-primary hover:text-background bg-secondBackground`}
                onClick={() => setIsEdit(!isEdit)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </g>
              </svg>
          </button>
        </div>

        {
          isEdit
          ?   <div></div>
          :   <div
                className='flex flex-col gap-5 w-full h-full px-2'
              >
                
                {/* title */}
                <h1
                  className='font-bold text-3xl'
                >
                  {name}
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
                      className='flex flex-row items-center gap-2'
                    >
                      <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/><path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"/><path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"/></svg>
                      <p className='font-medium text-dimText text-sm'>
                        Priority
                      </p>
                    </div>
                    <p
                      className={`${priorityId === 0 && "bg-red-300 text-red-700"} ${priorityId === 1 && "bg-yellow-200 text-yellow-700"} ${priorityId === 2 && "bg-blue-300 text-blue-700"} p-1 px-3 rounded-full text-xs font-medium w-fit`}
                    >
                      {priority}
                    </p>
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
                                        className='flex flex-row items-center gap-2 rounded-md p-1 w-full hover:bg-background duration-200'
                                        key={index + 1}
                                    >
                                        <img 
                                            className={`max-w-6 min-w-6 w-6 min-h-6 max-h-6 rounded-full border-2 border-primary object-fit object-center`}
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
              </div>
        }

      </div>
    </div>
  )
}

export default TaskMenu