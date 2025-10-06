import React, { useState } from 'react'

const SettingsMenu = ({ handleCloseSettingsMenu }) => {
    
    // current view
    const [currentView, setCurrentView] = useState("My Profile")
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
        <div
            className='w-full min-h-screen h-full flex items-center justify-center col-span-3 pb-10'
        >
            <div
                className='flex flex-col gap-5 bg-secondBackground shadow-background shadow-2xl rounded-md border-2 border-primary w-[40rem] h-[38rem] p-5'
            >

                {/* close button */}
                <div
                    className='flex flex-row items-center justify-between w-full h-fit'
                >
                    <p
                        className='text-xl font-semibold'
                    >
                        Settings
                    </p>
                    <button
                        className='p-1 rounded-full w-fit bg-background duration-200 hover:bg-primary hover:text-background'
                        onClick={() => handleCloseSettingsMenu()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
                    </button>
                </div>
                

                <div
                    className='w-full flex flex-row gap-3 h-full'
                >
                    
                    {/* views */}
                    <div
                        className='min-w-56 h-full rounded-md bg-background  p-4 flex flex-col gap-2'
                    >
                        {
                            views.map((view) => (
                                <button
                                    className={`w-full flex items-center gap-2 duration-200  justify-start  p-2 rounded-md hover:text-primary ${currentView === view.name ? "bg-secondBackground" : ""}`}
                                    onClick={() => setCurrentView(view.name)}
                                >
                                    <i
                                        className={`${currentView === view.name ? "text-primary" : ""}`}
                                    >
                                        {view.icon}
                                    </i>
                                    <span
                                        className={`font-medium text-sm text-text`}
                                    >
                                        {view.name}
                                    </span>
                                </button>
                            ))
                        }
                    </div>

                    <div
                        className='w-full h-full bg-background flex p-5 flex-col rounded-md overflow-y-scroll'
                    >
                        
                        {/* my profile */}
                        <div
                            className={`${currentView === views[0].name ? "flex" : "hidden"} flex-col gap-5 w-full h-full`}
                        >

                            <div
                                className='flex flex-col gap-2'
                            >
                                <h1
                                    className='font-semibold text-xl'
                                >
                                    My profile
                                </h1>
                                <span className='w-full h-0.5 bg-primary rounded-full'></span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SettingsMenu