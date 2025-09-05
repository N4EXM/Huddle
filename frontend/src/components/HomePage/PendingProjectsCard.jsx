import React from 'react'

const PendingProjectsCard = () => {

  const mockProjects = [
    {
      id: 0,
      title: "Task App",
      date: "Aug 26 2025"
    },
    {
      id: 1,
      title: "Note App",
      date: "sep 08 2025"
    },
    {
      id: 2,
      title: "Project management App",
      date: "Nov 12 2025"
    }
  ]

  return (
    <div
        className='flex p-4 font-semibold flex-col gap-4 col-span-4 row-span-8 bg-secondBackground rounded-lg'
    >

      <h1>Pending Projects</h1>

      <div
        className='flex flex-col gap-3 '
      >
        {mockProjects.map((project) => (
          <button
            key={project.id}
            className='w-full h-fit flex flex-col  relative bg-background rounded-md text-start p-2 hover:bg-primary duration-200'
          >
            <span
              className='text-sm font-semibold'
            >
              {project.title}
            </span>
            <span
              className='text-(length:--font-size-xxs) font-normal text-text/50 '
            >
              Due Date: {project.date}
            </span>
            <i
              className='absolute top-4 right-4'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M15.269 4.21a.75.75 0 0 0-1.04 1.08l8.274 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441z"/></svg>
            </i>
          </button>
        ))}
        
      </div>

    </div>
  )
}

export default PendingProjectsCard