import React, { useState } from 'react'
import userDefaultImg from '../../assets/images/userDefault.png'

const SettingsMenu = ({ handleCloseSettingsMenu, currentUser }) => {
    
    // toggles
    const [isEdit, setIsEdit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

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
    const contactNumber = currentUser.contactNumber

    // user state
    const [cName, setCName] = useState(name || "")
    const [cEmail, setCEmail] = useState(email || "")
    const [cUserImage, setCUserImage] = useState(userImage || null)
    const [cContactNumber, setCContactNumber] = useState(contactNumber || "")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    // functions
    const handleCloseEdit = () => {
        setCName(name)
        setCEmail(email)
        setCUserImage(userImage)
        setCContactNumber(contactNumber)
        setIsEdit(false)
    }

    const handleNumberInput = (value) => {
        // Remove any non-digit characters
        const numbersOnly = value.replace(/\D/g, '');
    
        // Limit to 10 characters
        setCContactNumber(numbersOnly.slice(0, 10))
    };
    
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
                                    className='relative flex w-fit flex-row gap-3'
                                >
                                    <div
                                        className='relative w-fit flex h-fit'
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
                                    
                                    <div
                                        className='flex flex-col gap-0.5 w-fit h-fit pt-0.5'
                                    >
                                        <h1
                                            className='text-sm font-semibold'
                                        >
                                            Profile Picture
                                        </h1>
                                        <p
                                            className='text-xs font-medium text-text/80 w-48'
                                        >
                                            This is the picture other users will see
                                        </p>
                                    </div>
                                </div>
                                
                            </div>

                            {/* name */}
                            <div
                                className='flex flex-col gap-1 w-full relative'
                            >
                                <label 
                                    htmlFor=""
                                    className='pl-1 text-xs '
                                >
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    className='p-1.5 outline-none pl-8 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                    placeholder='Enter your first name...'   
                                    readOnly={!isEdit}  
                                    onChange={(e) => setCName(e.target.value)}
                                    value={cName}  
                                />
                                <svg 
                                    className='absolute top-7 left-2.5'
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <circle cx="12" cy="6" r="4" fill="currentcolor" />
                                    <path fill="currentcolor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" />
                                </svg>
                            </div>

                            {/* email */}
                            <div
                                className='flex w-full h-fit'
                            >
                                <div
                                    className='flex flex-col gap-1 w-full relative'
                                >
                                    <label 
                                        htmlFor=""
                                        className='pl-1 text-xs '
                                    >
                                        Email
                                    </label>
                                    <input 
                                        type="text" 
                                        className='p-1.5 outline-none pl-8 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                        placeholder='Enter your email...'    
                                        readOnly={!isEdit}
                                        onChange={(e) => setCEmail(e.target.value)}
                                        value={cEmail}   
                                    />
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        className='absolute top-7 left-2.5'
                                    >
                                        <path fill="currentcolor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                    </svg>
                                </div>
                            </div>

                            {/* contact number */}
                            <div
                                className='flex flex-col gap-1 w-full relative'
                            >
                                <label 
                                    htmlFor=""
                                    className='pl-1 text-xs '
                                >
                                    ContactNumber
                                </label>
                                <input 
                                    type="text" 
                                    className='p-1.5 outline-none pl-8 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                    placeholder='Enter your first name...'   
                                    readOnly={!isEdit}  
                                    onChange={(e) => handleNumberInput(e.target.value)}
                                    value={cContactNumber}  
                                />
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    className='absolute top-7 left-2.5'
                                >
                                    <path fill="currentcolor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                                </svg>
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

                        <div
                            className={`${currentView === views[1].name ? "flex" : "hidden"} flex-col gap-5 w-full h-full`}
                        >
                            {/* title */}
                            <div
                                className='flex flex-col gap-2'
                            >
                                <h1
                                    className='font-semibold text-xl'
                                >
                                    Security
                                </h1>
                                <span className='w-full h-0.5 bg-primary rounded-full'></span>
                            </div>

                            <div
                                className='flex flex-col items-start justify-between w-full gap-3'
                            >

                                <p
                                    className='text-xs font-medium text-text/80 pr-10'
                                >
                                    Enter your current password, if you want to change your password.
                                </p>

                                <div
                                    className='w-full h-fit relative'
                                >
                                    <label 
                                        htmlFor=""
                                        className='text-xs pl-1'
                                    >
                                        Password: 
                                    </label>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        className='p-1.5 outline-none pl-2.5 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                        placeholder='Enter your password...' 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                    <button
                                        className='text-text/80 absolute top-6 cursor-pointer hover:text-primary duration-200 right-0.5 p-2'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword
                                            ?   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" />
                                                    <path fill="currentcolor" fillRule="evenodd" d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066c.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5s4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clipRule="evenodd" />
                                                </svg>
                                            :   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197" clipRule="evenodd" />
                                                    <path fill="currentcolor" d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69" />
                                                </svg>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* new password */}
                            <div
                                className='flex flex-col items-start justify-between w-full'
                            >
                                <div
                                    className='w-full h-fit relative'
                                >
                                    <label 
                                        htmlFor=""
                                        className='text-xs pl-1'
                                    >
                                       New Password: 
                                    </label>
                                    <input 
                                        type={showNewPassword ? "text" : "password"} 
                                        className='p-1.5 outline-none pl-2.5 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                        placeholder='Enter your new password...'  
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <button
                                        className='text-text/80 absolute top-6 cursor-pointer hover:text-primary duration-200 p-2 right-0.5'
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        
                                        {
                                            showNewPassword 
                                            ?   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" />
                                                    <path fill="currentcolor" fillRule="evenodd" d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066c.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5s4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clipRule="evenodd" />
                                                </svg>
                                            :   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197" clipRule="evenodd" />
                                                    <path fill="currentcolor" d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69" />
                                                </svg>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* confirm new password */}
                            <div
                                className='flex flex-col items-start justify-between w-full'
                            >
                                <div
                                    className='w-full h-fit relative'
                                >
                                    <label 
                                        htmlFor=""
                                        className='text-xs pl-1'
                                    >
                                       Confirm new Password: 
                                    </label>
                                    <input 
                                        type={showNewPassword ? "text" : "password"} 
                                        className='p-1.5 outline-none pl-2.5 rounded-md border-2 border-primary bg text-xs w-full bg-secondBackground'
                                        placeholder='Enter your new password...'  
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                    <button
                                        className='text-text/80 absolute top-6 cursor-pointer hover:text-primary duration-200 p-2 right-0.5'
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        
                                        {
                                            showNewPassword 
                                            ?   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" />
                                                    <path fill="currentcolor" fillRule="evenodd" d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066c.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5s4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clipRule="evenodd" />
                                                </svg>
                                            :   <svg 
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentcolor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197" clipRule="evenodd" />
                                                    <path fill="currentcolor" d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69" />
                                                </svg>
                                        }
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SettingsMenu
        
