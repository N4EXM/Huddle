import React, { useState, useMemo } from 'react'
import Sidebar from '../components/General/Sidebar'
import Navbar from '../components/General/Navbar'
import { useMock } from '../context/MockContext'
import ProjectCard from '../components/ProjectsPage/ProjectCard'
import ProjectListItem from '../components/ProjectsPage/ProjectListItem'

const ProjectsPage = () => {

  // toggles
  const [toggleListView, setToggleListView] = useState(false) // false: cards | true: list items 

  // data
  const { users, projects, getSpecificUsers } = useMock()

  return (
    <div
      className='w-full h-screen max-h-screen bg-background p-8 grid grid-cols-12 grid-rows-12 text-text gap-4'
    >
      <Sidebar/>
      <Navbar/>
      <div
        className='w-full h-full col-span-9 row-span-10 grid grid-cols-12 grid-rows-12 gap-4'
      >
          
        {/* title */}
        <div
            className='col-span-12'
          >
            <p
              className='font-semibold text-3xl'
            >
              Projects
            </p>
        </div>

        <div
          className='col-span-12 bg-secondBackground row-span-11 rounded-lg flex flex-col gap-4 p-4'
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

            {/* new project card */}
            <button
              className='text-sm p-2 px-3 flex items-center gap-1 border border-primary rounded-md duration-200 hover:bg-primary'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M12 4.5v15m7.5-7.5h-15"/></svg>
              Project
            </button>

          </div>

          {/* project list */}
          <div
            className={`px-4 w-full gap-4 max-h-full scrollbar-hide overflow-y-scroll ${toggleListView ? "flex flex-col" : "grid grid-cols-2"}`}
          >
            {
              toggleListView 
              ? projects.map((project) => (
                  <ProjectListItem
                    key={project.projectId}
                    name={project.name}
                    priority={project.priority}
                    percentage={project.percentage}
                    date={project.date}
                    projectLeaderId={project.projectLeaderId}
                    teamMembers={getSpecificUsers(project.teamIds)}
                  />
                ))
              : projects.map((project) => (
                  <ProjectCard
                    key={project.projectId}
                    name={project.name}
                    priority={project.priority}
                    description={project.description}
                    percentage={project.percentage}
                    date={project.date}
                    projectLeaderId={project.projectLeaderId}
                    teamMembers={getSpecificUsers(project.teamIds)}
                  />
                ))
            }
          </div>
          

        </div>

      </div>      

    </div>
  )
}

export default ProjectsPage