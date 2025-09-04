import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const DashboardPage = () => {
  return (
    <div
      className='w-full h-screen bg-background p-8 grid grid-cols-12 grid-rows-12 text-text gap-4'
    >
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default DashboardPage