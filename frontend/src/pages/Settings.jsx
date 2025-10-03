import React, { useState } from 'react'
import Layout from '../components/General/Layout'

const Settings = () => {

  const [views] = useState([
    {
      name: "My Profile",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="4" fill="currentcolor" />
              <path fill="currentcolor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" />
            </svg>
    },
    {
      name: "Security",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M6.616 21q-.667 0-1.141-.475T5 19.386v-8.77q0-.666.475-1.14T6.615 9H8V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h1.385q.666 0 1.14.475t.475 1.14v8.77q0 .666-.475 1.14t-1.14.475zM12 16.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7z" />
            </svg>
    }
  ])

  return (
    <Layout>
      
      {/* page name */}
      <div
        className='col-span-12'
      >
        <p
          className='font-semibold text-3xl'
        >
          Settings
        </p>
      </div>

      <div
        className='col-span-12 row-span-11 rounded-md grid grid-cols-12 gap-4'
      >

        {/* views */}
        <div
          className='col-span-4 flex flex-col w-full h-full p-2 gap-2 rounded-md bg-secondBackground'
        >
          {views.map((view) => (
            <button
              className='w-full flex items-center gap-2 justify-start hover:bg-background p-2 rounded-md'
            >
              <i>
                {view.icon}
              </i>
              <span
                className='font-medium '
              >
                {view.name}
              </span>
            </button>
          ))}
        </div>  

      </div>

    </Layout>
  )
}

export default Settings