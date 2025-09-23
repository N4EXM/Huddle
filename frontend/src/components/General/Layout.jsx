import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div
      className='w-full h-screen max-h-screen bg-background relative grid grid-cols-12 grid-rows-12 text-text overflow-hidden'
    >
      <Sidebar/>
      <Navbar/>
      <div
        className='w-full h-[92.5vh] col-span-9 row-span-10 grid grid-cols-12 grid-rows-12 gap-4 p-8 pt-16 px-6'
      >
        {children}
      </div>
    </div>
  )
}

export default Layout