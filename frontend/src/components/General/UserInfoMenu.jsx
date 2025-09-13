import React, {useState, useEffect} from 'react'

const UserInfoMenu = ({setOpenMenu, currentUser}) => {

    // toggles
    const [isEdit, setIsEdit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // user state management
    const [name, setName] = useState(currentUser.name)
    const [email,setEmail] = useState(currentUser.email)
    const [contactNumber, setContactNumber] = useState(currentUser.contactNumber)
    const [password, setPassword] = useState(currentUser.password)

  return (
    <div
        className={`p-5 bg-secondBackground rounded-md border-2 border-thirdBackground/40 flex flex-col gap-10 shadow-2xl col-start-3 w-full h-full`}
    >
        {/* close button */}
        <div
            className={`duration-300 flex flex-row w-full items-center justify-between`}
        >
            <button
                className='p-1 rounded-full bg-background duration-200 hover:bg-primary'
                onClick={() => setOpenMenu(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
            </button>
        </div>

        {/* title and user image */}
        <div
            className='flex flex-col gap-4 px-2'
        >

            <div
                className='flex flex-col gap-3 '
            >
                <h1
                    className='font-semibold text-3xl'
                >
                    User Details
                </h1>
                <p
                    className='text-sm text-dimText font-medium'
                >
                    Below are your personal details, which other people will see.
                </p>
            </div>
            

            <div
                className='flex-row items-start justify-start gap-3 '
            >
                
                {/* image */}
                <div
                    className='relative w-fit h-fit'
                >
                    <img 
                        src={currentUser.image}
                        alt=""
                        className='max-h-20 rounded-full border-2 border-primary max-w-20 h-20 w-20'    
                    />
                    <button
                        className={`${isEdit ? "block" : "hidden"} bg-primary p-1 rounded-full absolute -bottom-1 right-0`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentcolor" d="M13.999 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M3 6a3 3 0 0 1 3-3h7.999a3 3 0 0 1 3 3v3.002a2.9 2.9 0 0 0-1 .229V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v7.999c0 .372.103.721.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l1.745 1.715l-.707.707l-1.738-1.709a.5.5 0 0 0-.701 0l-4.661 4.58A2 2 0 0 0 6 16h3.474q-.024.076-.043.155L9.22 17H6a3 3 0 0 1-3-3zm7.979 9.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.2 2.2 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02"/></svg>
                    </button>
                </div>

            </div>
            

        </div>

        {/* user detail inputs */}
        <div
            className='flex flex-col gap-4 w-full h-full px-2'
        >

            {/* name input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-9 text-xs font-medium '
                    type="text"
                    placeholder='Enter your full name...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    readOnly={!isEdit}
                />
                <svg className='left-2.5 top-2.5 absolute text-primary' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20.37 21.25a.75.75 0 0 1-.75.75H4.38a.75.75 0 0 1-.75-.75c0-4.1 4.5-7.28 8.37-7.28s8.37 3.18 8.37 7.28M17.1 7.11A5.1 5.1 0 1 1 12 2a5.11 5.11 0 0 1 5.1 5.11"/></svg>
            </div>

            {/* email input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-9 text-xs font-medium '
                    type="text"
                    placeholder='Enter your email...'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    readOnly={!isEdit}
                />
                <svg className='left-2.5 top-2.5 absolute text-primary' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 11.96q.125 0 .234-.038q.108-.038.214-.093l7.229-4.733q.142-.086.185-.235t-.016-.297q-.038-.193-.252-.28q-.213-.086-.413.035L12 11L4.82 6.32q-.2-.122-.404-.052t-.262.276q-.058.154-.015.313t.184.24l7.229 4.732q.106.055.214.093q.109.037.234.037"/></svg>
            </div>

            {/* contact number input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-9 text-xs font-medium '
                    type="text"
                    placeholder='Enter your contact number...'
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                    readOnly={!isEdit}
                />
                <svg className='left-2.5 top-2.5 absolute text-primary'  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                {/* <p
                    className='text-primary font-medium left-2 top-2.5 absolute '
                >
                    +44
                </p> */}
            </div>
                
        </div>

        <button
            className={`${isEdit ? "" : ""} absolute right-12 bottom-12 active:bg-primary px-3 p-1.5 rounded-sm duration-200 hover:scale-110 active:scale-90 border-2 border-primary w-fit h-fit`}
            onClick={() => setIsEdit(!isEdit)}
        >
            {
                isEdit 
                ?   
                    <span
                        className='flex flex-row items-center justify-center gap-1 w-fit'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709" />
                        </svg>
                        <p
                            className='text-sm text-text font-medium'
                        >
                            Save
                        </p>
                    </span>  
                :   
                    <span
                        className='flex flex-row items-center gap-1 w-fit'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z" />
                        </svg>
                        <p
                            className='text-sm text-text font-medium'
                        >
                            Edit
                        </p>
                    </span>
                    
            }
        </button>
    </div>
  )
}

export default UserInfoMenu