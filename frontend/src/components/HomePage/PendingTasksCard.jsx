import React from 'react'

const PendingTasksCard = () => {

  const mockTasks = [
    {
      id: 0,
      title: "Create a task card component",
      projectName: "Todo App"
    },
    {
      id: 1,
      title: "Create a Note Card",
      projectName: "Note App"
    },
    {
      id: 2,
      title: "Create a Task card list item",
      projectName: "Project Management App"
    }
  ]

  return (
    <div
        className='col-span-8 row-span-3 flex flex-col gap-2 bg-secondBackground rounded-lg p-4 '
    >
        
      <h1
        className='font-semibold'
      >
        Pending Tasks
      </h1>

      <div
        className='flex flex-col gap-1 overflow-y-scroll h-full'
      >
        {
          mockTasks.map((task) => (
            <button
              key={task.id}
              className='bg-background text-sm p-2 w-full text-start flex flex-row items-center justify-between'
            >
              <span
              
              >
                {task.title}
              </span>
              <span
              
              >
                {task.projectName}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M15.269 4.21a.75.75 0 0 0-1.04 1.08l8.274 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441z"/></svg>
            </button>
          ))
        }
      </div>

    </div>
  )
}

export default PendingTasksCard