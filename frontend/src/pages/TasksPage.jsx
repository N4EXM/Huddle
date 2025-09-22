import React, {useState, useEffect} from 'react'
import Navbar from '../components/General/Navbar'
import Sidebar from '../components/General/Sidebar'
import { useMock } from '../context/MockContext'
import TaskCard from '../components/TasksPage/TaskCard'
import TaskListItem from '../components/TasksPage/TaskListItem'
import { getSpecificUsers } from '../utils/userUtils'

const TasksPage = () => {

  // toggles
  const [toggleListView, setToggleListView] = useState(false) // false: cards | true: list items 

  // data
  const { users, projects, tasks } = useMock()

  return (
    <div
      className='w-full h-screen max-h-screen bg-background  grid grid-cols-12 grid-rows-12 text-text overflow-hidden'
    >
      <Sidebar/>
      <Navbar/>
      <div
        className='w-full h-[92.5vh] col-span-9 row-span-10 grid grid-cols-12 grid-rows-12 gap-4 p-8'
      >
        {/* title */}
        <div
            className='col-span-12'
          >
            <p
              className='font-semibold text-3xl'
            >
              Tasks
            </p>
        </div>

        <div
          className='col-span-12 bg-secondBackground row-span-11 rounded-lg flex flex-col gap-6 p-4'
        >
          {/* buttons */}
          <div
            className='flex flex-row items-center justify-between w-full px-3'
          >
            {/* project card view */}
            <div
              className='flex flex-row items-center gap-5'
            >
              <button
                className={`text-sm cursor-pointer flex flex-row items-center gap-2 duration-200 p-2 rounded-md ${toggleListView ? "text-dimText" : "bg-background"}`}
                onClick={() => setToggleListView(false)}
              >
                <svg 
                  className={`${toggleListView ? "" : "text-primary"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <rect width="9" height="9" x="1.5" y="1.5" fill="none" rx="1" strokeWidth="1" stroke="currentcolor"/>
                  <rect width="9" height="9" x="13.5" y="1.5" fill="none" rx="1" strokeWidth="1" stroke="currentcolor"/>
                  <rect width="9" height="9" x="13.5" y="13.5" fill="none" rx="1" strokeWidth="1" stroke="currentcolor"/>
                  <rect width="9" height="9" x="1.5" y="13.5" fill="none" rx="1" strokeWidth="1" stroke="currentcolor"/>
                </svg>
                Cards
              </button>
              <button
                className={`text-sm flex flex-row cursor-pointer items-center gap-2 duration-200 p-2 rounded-md ${toggleListView ? "bg-background": "text-dimText"}`}
                onClick={() => setToggleListView(true)}
              >
                <svg className={`${toggleListView ? "text-primary" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36" d="M160 144h288M160 256h288M160 368h288"/><circle cx="80" cy="144" r="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="80" cy="256" r="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="80" cy="368" r="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/></svg>
                List
              </button>
            </div>
          </div>

          {/* project name and tasks */}
          <div
            className="flex flex-col gap-8 h-full overflow-y-scroll scrollbar-hide px-4"
          >
            {
              projects.map((project) => (
                <div
                  className='flex flex-col gap-4'
                  key={project.projectId}
                >
                  
                  {/* project name */}
                  <div
                    className='flex flex-col gap-2'
                  >
                    <h1
                      className='text-2xl font-semibold pl-1'
                    >
                      {project.name}
                    </h1>
                    <span className='w-full h-0.5 bg-thirdBackground'></span>
                  </div>

                  {/* project tasks */}
                  <div
                    className={`${toggleListView ? "flex flex-col w-full" : "grid grid-cols-3"} gap-4 w-full h-full `}
                  >
                    {
                      toggleListView
                      ? tasks
                          .filter(task => task.projectId === project.projectId)
                          .map((task) => {
                            // console.log(task)
                            return (
                              <TaskListItem
                                key={task.taskId}
                                id={task.taskId}
                                name={task.name}
                                date={task.date}
                                priority={task.priority}
                                completed={task.completed}
                                projectId={task.projectId}
                                teamMembers={getSpecificUsers(project.teamIds, users)}
                              />
                            )})
                      : tasks
                          .filter(task => task.projectId === project.projectId)
                          .map((task) => {
                            // console.log(task)
                            return (
                              <TaskCard
                                key={task.taskId}
                                id={task.taskId}
                                name={task.name}
                                description={task.description}
                                date={task.date}
                                priority={task.priority}
                                completed={task.completed}
                                projectId={task.projectId}
                                teamMembers={getSpecificUsers(project.teamIds, users)}
                              />
                            )})
                    }
                  </div>

                </div>
              ))
            }
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default TasksPage