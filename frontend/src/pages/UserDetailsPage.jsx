import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const UserDetailsPage = () => {
  return (
    <div
      className='w-full h-screen max-h-screen bg-background p-8 grid grid-cols-12 grid-rows-12 text-text gap-4'
    >
      <Sidebar/>
      <Navbar/>
      <div
        className='w-full h-full col-span-9 row-span-10 grid grid-cols-12 grid-rows-12 gap-4'
      >
          
      </div>
      
    </div>
  )
}

export default UserDetailsPage