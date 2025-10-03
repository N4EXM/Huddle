import React, { useEffect, useState, useMemo } from 'react'
import { useMock } from '../../context/MockContext'
import Calendar from '../General/Calendar'
import TeamSearchBar from '../General/TeamSearchBar'
import TeamMemberCard from '../General/TeamMemberCard'

const TaskMenu = ({selectedTask, closeMenu}) => {

  // context
  const { getSpecificUsers, users } = useMock()

  // toggles
  const [isEdit, setIsEdit] = useState(false)
  const [isCalendarActive, setIsCalendarActive] = useState(false)

  // task state
  const [taskId, setTaskId] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("")
  const [teamMembers, setTeamMembers] = useState([])
  const [completed, setCompleted] = useState(false)
  const [projectId, setProjectId] = useState(null)

  // search state
  const [searchQuery, setSearchQuery] = useState("")
  const [debounceTerm, setDebounceTerm] = useState("")
  const [membersId, setMembersId] = useState([])

  // functions
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(debounceTerm.toLowerCase()))
  }, [users, debounceTerm])

  const handleAddMember = (user) => {
    if (!teamMembers.includes(user)) {
      setTeamMembers([...teamMembers, user])
      setMembersId([...membersId, user.userId])
      setSearchQuery("")
    }
    else {
      setSearchQuery("")
    }
  }

  const handleRemoveMember = (userId) => {
    setTeamMembers(prevMembers => prevMembers.filter(member => member.userId !== userId))
  }  

  const handleCancelEdit = () => {
    if (isEdit === true) {
      
      // state
      setName(selectedTask.name)
      setDescription(selectedTask.description)
      setDate(selectedTask.date)
      setPriority(selectedTask.priority)
      setTeamMembers(getSpecificUsers(selectedTask.teamIds))
      setCompleted(selectedTask.completed)
      setProjectId(selectedTask.projectId)

      setIsEdit(false)

    }
  }

  // Calculate priorityId directly from priority
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
  const getPriorityId = () => {
    for (let i = 0; i < priorityColours.length; i++ ) {
      if (priority === priorityColours[i].priority) {
        return priorityColours[i].id
      }
    }
    return 0 // default
  }
  const priorityId = getPriorityId() // This will update automatically

  useEffect(() => {
    setTaskId(selectedTask.taskId)
    setName(selectedTask.name)
    setDescription(selectedTask.description)
    setDate(selectedTask.date)
    setPriority(selectedTask.priority)
    setTeamMembers(getSpecificUsers(selectedTask.teamIds))
    setCompleted(selectedTask.completed)
    setProjectId(selectedTask.projectId)
  }, [selectedTask])

  return (
    <div
      className={`flex bg-secondBackground rounded-md border-2 relative border-primary w-1/3 h-[95vh] `}
    >
      <div
        className={`p-5 flex flex-col gap-10 w-full h-full scrollbar-hide overflow-y-scroll`}
      >
        {/* close button and edit buttons */}
        <div
          className={`duration-300 flex flex-row w-full items-center justify-between`}
        >
          <button
                className='p-1 rounded-full bg-background duration-200 hover:bg-primary hover:text-background'
                onClick={() => closeMenu()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
          </button>
          <button
            className={`cursor-pointer p-1.5 rounded-full text duration-200 hover:bg-primary hover:text-background bg-secondBackground`}
            onClick={isEdit ? () => handleCancelEdit() : () => setIsEdit(true)}
          >
            {
              isEdit
              ?   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m14.685 11.829l-.708-.708l2.82-2.819l-1.099-1.098l-2.82 2.819l-.707-.707l5.01-5.03q.146-.145.335-.216q.19-.07.398-.07q.188 0 .38.064t.352.228l1.067 1.074q.166.159.226.351q.061.193.061.395q0 .188-.07.378q-.07.189-.217.335zM5 19h1.098l5.74-5.74l-.546-.552l-.552-.547L5 17.902zm14.762 2.177l-7.21-7.185L6.519 20H4v-2.513l6.014-6.033l-7.191-7.215l.714-.714l16.938 16.938zm-.743-15.085l-1.111-1.111zm-3.321 1.112l1.098 1.098zm-4.406 5.504l-.551-.546l1.098 1.097z"/>
                  </svg>
              :   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5 19h1.098L16.796 8.302l-1.098-1.098L5 17.902zm-.192 1q-.343 0-.576-.232T4 19.192v-1.04q0-.332.13-.632t.349-.518L17.18 4.287q.153-.137.339-.212T17.907 4t.39.064t.35.228l1.067 1.074q.165.159.226.35q.06.19.06.38q0 .204-.068.39q-.069.185-.218.339L6.998 19.521q-.217.218-.518.348T5.848 20zM19.019 6.092l-1.111-1.111zm-2.781 1.67l-.54-.558l1.098 1.098z"/>
                  </svg>
            }
            
          </button>
        </div>

        {
          isEdit
          ?   <div
                className='flex flex-col gap-10 w-full h-full px-2 '
              >
                {/* title */}
                <div
                  className='flex flex-col gap-2'
                >
                  <h1
                    className='font-semibold text-2xl'
                  >
                    Edit Task
                  </h1>
                  <p
                    className='text-sm font-medium text-dimText pr-8'
                  >
                    Enter details into the fields to change the tasks' information.
                  </p>
                </div>
                <div
                  className='flex flex-col gap-4 w-full h-full'
                >
                  {/* name */}
                  <div
                      className='flex flex-col gap-1.5'
                  >
                      <p
                          className='font-medium text-sm pl-3'
                      >
                          Task Name: 
                      </p>
                      <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text" 
                          className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary rounded-md text-xs w-full bg-background'
                          placeholder='Enter a name...'
                          required
                      />
                  </div>

                  {/* date */}
                  <div
                    className='flex flex-col gap-1.5 relative h-fit w-full'
                  >
                    <p
                      className='font-medium text-sm pl-3'
                    >
                      Due Date: 
                    </p>
                    <input
                      value={date}
                      type="text" 
                      className='p-2 pl-3 placeholder:text-dimText outline-none font-medium border-2 border-primary rounded-md text-xs w-full bg-background'
                      placeholder='Pick a date...'
                      readOnly
                    />
                    <button
                      className='flex absolute top-[2.15rem] right-2.5 hover:text-primary duration-200'
                      onClick={() => setIsCalendarActive(!isCalendarActive)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none">
                        <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g>
                      </svg>
                    </button>
                    <Calendar
                      isCalendarActive={isCalendarActive}
                      setDueDate={setDate}
                      setIsCalendarActive={setIsCalendarActive}
                    />
                  </div>

                  {/* description */}
                  <div
                    className='flex flex-col gap-1.5 h-fit w-full'
                  >
                    <p
                      className='font-medium text-sm pl-3'
                    >
                      Task description: 
                    </p>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      value={description}
                      className='p-3 placeholder:text-dimText outline-none font-medium border-2 border-primary resize-none rounded-md text-xs w-full scrollbar-hide bg-background min-h-40'
                      placeholder='Enter your task description...'
                      required
                    ></textarea>
                  </div>
                </div>

                {/* team members */}
                <div
                  className='flex flex-col gap-8 w-full h-fit pb-10'
                >   
                  {/* search */}
                  <div
                    className='flex flex-col gap-4'
                  >
                    <div
                      className='flex flex-col gap-0.5 pr-6'
                    >
                      <h1
                        className='font-semibold '
                      >
                        Add team members
                      </h1>
                      <p
                        className='text-xs text-dimText'
                      >
                        Add members to the task to know who is associated with the task.
                      </p>
                    </div>  
                    <TeamSearchBar
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      filteredUsers={filteredUsers}
                      handleAddMember={handleAddMember}
                    />

                    <div
                      className='flex flex-col gap-2 w-full h-full'
                    >
                      {
                      teamMembers.length > 0 
                      ?   teamMembers.map((member) => (
                            <TeamMemberCard
                              key={member.taskId}
                              userId={member.userId}
                              image={member.image}
                              name={member.name}
                              email={member.email}
                              handleRemoveMember={handleRemoveMember}
                            />
                          ))
                      :   <div
                            className='flex flex-col gap-4 w-full h-full bg-background rounded-md items-center justify-center m-auto p-5 min-h-52'
                          >
                            <i
                              className='p-3 rounded-full bg-secondBackground text-primary'
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="evenodd">
                                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                  <path fill="currentcolor" d="M11 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7M4.413 17.601c-.323.41-.413.72-.413.899c0 .122.037.251.255.426c.249.2.682.407 1.344.582C6.917 19.858 8.811 20 11 20q.333 0 .658-.005a1 1 0 0 1 .027 2Q11.345 22 11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13q.671 0 1.316.07a1 1 0 0 1-.211 1.989Q11.564 15 11 15c-2.023 0-3.843.59-5.136 1.379c-.647.394-1.135.822-1.45 1.222Zm12.173-2.43a1 1 0 0 0-1.414 1.415L16.586 18l-1.414 1.414a1 1 0 1 0 1.414 1.414L18 19.414l1.414 1.414a1 1 0 1 0 1.414-1.414L19.414 18l1.414-1.414a1 1 0 0 0-1.414-1.414L18 16.586z" />
                                </g>
                              </svg>
                            </i>
                            <div
                              className='flex flex-col gap-1 items-center justify-center text-center'
                            >
                              <h1
                                className='font-semibold'
                              >
                                No members
                              </h1>
                              <p
                                className='text-dimText font-medium text-xs px-10'
                              >
                                No members are associated with this task
                              </p>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                    <div
                      className='flex items-end justify-end w-full h-full'
                    >
                      <button
                        className='p-2 cursor-pointer rounded-full bg-primary'
                        onClick={() => {}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 13.626l1.606 1.722c.886.95 1.329 1.424 1.825 1.574c.436.131.9.096 1.315-.1c.473-.224.852-.761 1.612-1.836L18 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>
          :   <div
                className='flex flex-col gap-10 w-full h-full px-2'
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
                  {/* status */}
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

                  {/* priority */}
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

                {/* description */}
                <div
                  className='w-full h-fit flex flex-col gap-3'
                >
                  <div
                    className='flex flex-row items-center gap-2 text-slate-100/70'
                  >
                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m0 4a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75"/><path fill="currentColor" fillRule="evenodd" d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25z" clipRule="evenodd"/></svg>
                    <p
                      className='text-sm font-medium'
                    >
                      description
                    </p>
                  </div>
                  <p
                    className='text-sm p-3 bg-background rounded-md min-h-40'
                  >
                    {description}
                  </p>
                </div>

                {/* delete and checkbox button */}
                <div
                  className='flex w-full h-full items-end justify-end'
                >
                  <div
                    className='flex flex-row items-center justify-between w-full'
                  >
                    <button
                      className='p-2 rounded-md bg-rose-500 hover:bg-rose-600 active:bg-rose-700 duration-200'
                      onClick={() => {}}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4" stroke-width="1.5"/></svg>
                    </button>

                    {/* checkbox */}
                    <button
                      className={`flex items-center justify-center ${completed ? "text-primary" : ""} p-1.5 min-w-9 min-h-9 rounded  border border-primary cursor-pointer bg-background`}
                      onClick={() => setCompleted(!completed)}
                    >
                      {
                        completed
                        && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentcolor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"/></svg> 
                      }
                    </button>
                  </div>
                </div>
              </div>
        }

      </div>
    </div>
  )
}

export default TaskMenu