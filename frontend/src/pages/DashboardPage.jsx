import React from 'react'
import Sidebar from '../components/General/Sidebar'
import Navbar from '../components/General/Navbar'
import StatisticsCard from '../components/HomePage/StatisticsCard'
import ProjectAnalyticsCard from '../components/HomePage/ProjectAnalyticsCard'
import PendingProjectsCard from '../components/HomePage/PendingProjectsCard'

const DashboardPage = () => {
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
            Dashboard
          </p>
        </div>

        <StatisticsCard
          title={"Total Projects"}
          num={10}
          extraNum={5}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8"><path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"/><path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m1 5h5m-5 3h5m-5 3h5m-8-6h1m-1 3h1m-1 3h1"/></g></svg>}
        />
        <StatisticsCard
          title={"Completed Projects"}
          num={7}
          extraNum={2}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8"><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"/><path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1M11 14l2 2l4-4"/></g></svg>}
        />
        <StatisticsCard
          title={"Remaining Tasks"}
          num={16}
          extraNum={12}
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M6.562 8.062h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5m-2-4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm2 16.876h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5m-2-4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm2-2.438h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5m-2-4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm15.876-4.438h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 6.438h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 6.435h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1"/></svg>}
        />
        
        <ProjectAnalyticsCard/>

        <PendingProjectsCard/>
        
      </div>
    </div>
  )
}

export default DashboardPage