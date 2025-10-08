import React, { useState } from 'react'
import userDefaultImg from '../../assets/images/userDefault.png'

const SettingsMenu = ({ handleCloseSettingsMenu, currentUser }) => {
    
    // toggles
    const [isEdit, setIsEdit] = useState(false)

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

    // user 
    const name = currentUser.name
    const email = currentUser.email
    const userImage = currentUser.image

    // user state
    const [cName, setCName] = useState(name)
    const [cEmail, setCEmail] = useState(email)
    const [cUserImage, setCUserImage] = useState(userImage || null)

    // functions
    const handleCloseEdit = () => {
        setCName(name)
        setCEmail(email)
        setCUserImage(userImage)
        setIsEdit(false)
    }
    
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

                    {/* information box */}
                    <div
                        className='w-full h-full bg-background flex p-5 flex-col rounded-md overflow-y-scroll overflow-x-hidden relative'
                    >
                        {/* my profile */}
                        <div
                            className={`${currentView === views[0].name ? "flex" : "hidden"} flex-col gap-5 w-full h-full`}
                        >

                            {/* title */}
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

                            {/* profile */}
                            <div
                                className='flex flex-row items-start justify-start w-fit'
                            >
                                <div
                                    className='relative flex w-fit'
                                >
                                    <img 
                                        src={cUserImage || userDefaultImg}
                                        alt='user image'
                                        className={`${cUserImage === null && "p-2"} w-16 h-16 rounded-full border-2 border-primary`}
                                    />
                                    <button
                                        className={`${isEdit ? "flex" : "hidden"} absolute -right-0.5 -bottom-0.5 p-1 rounded-full bg-secondBackground border-2 border-primary hover:bg-primary duration-200 hover:text-background cursor-pointer`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                                            <path fill="currentcolor" d="M13.999 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M3 6a3 3 0 0 1 3-3h7.999a3 3 0 0 1 3 3v3.002a2.9 2.9 0 0 0-1 .229V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v7.999c0 .372.103.721.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l1.745 1.715l-.707.707l-1.738-1.709a.5.5 0 0 0-.701 0l-4.661 4.58A2 2 0 0 0 6 16h3.474q-.024.076-.043.155L9.22 17H6a3 3 0 0 1-3-3zm7.979 9.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.2 2.2 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02" />
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>

                            {/* first name */}
                            <div
                                className='flex flex-col gap-1 w-full'
                            >
                                <label 
                                    htmlFor=""
                                    className='pl-1 text-xs '
                                >
                                    First name
                                </label>
                                <input 
                                    type="text" 
                                    className='p-1.5 outline-none pl-2.5 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                    placeholder='Enter your first name...'   
                                    readOnly={!isEdit}  
                                    onChange={(e) => setCName(e.target.value)}
                                    value={cName}  
                                />
                            </div>

                            {/* email */}
                            <div
                                className='flex'
                            >
                                <div
                                    className='flex flex-col gap-1 w-full'
                                >
                                    <label 
                                        htmlFor=""
                                        className='pl-1 text-xs '
                                    >
                                        Email
                                    </label>
                                    <input 
                                        type="text" 
                                        className='p-1.5 outline-none pl-2.5 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                        placeholder='Enter your email...'    
                                        readOnly={!isEdit}
                                        onChange={(e) => setCEmail(e.target.value)}
                                        value={cEmail}   
                                    />
                                </div>
                            </div>

                            {/* edit button */}
                            <div
                                className='p-5 w-full h-fit absolute bottom-0 left-0 flex items-end justify-end'
                            >
                                {
                                    isEdit
                                    ?   <div
                                            className='flex flex-row items-center gap-2'
                                        >
                                            <button
                                                className='bg-rose-500 p-2 rounded hover:bg-rose-500/80 active:bg-rose-500/60 duration-200 hover:text-text/80'
                                                onClick={() => handleCloseEdit()}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                                                    <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8" />
                                                </svg>
                                            </button>
                                            <button
                                                className='bg-primary p-2 rounded hover:bg-primary/80 active:bg-primary/60 duration-200 hover:text-text/80'
                                                onClick={() => {}}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                    <path fill="none" stroke="currentcolor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="1.5" d="m4 12l4.95 4.95L19.557 6.343" />
                                                </svg>
                                            </button>
                                        </div>
                                    :   <button
                                            className='p-2 rounded-md bg-primary hover:bg-primary/80 active:bg-primary/70 duration-200 hover:text-text/80 px-3 text-sm font-medium flex flex-row-reverse items-center gap-1'
                                            onClick={() => setIsEdit(!isEdit)}
                                        >
                                        <span>Edit</span> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8" />
                                        </svg>
                                    </button>
                                }
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SettingsMenu
        
