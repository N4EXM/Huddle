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

            <h1
                className='font-semibold text-4xl'
            >
                User Details
            </h1>

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

                {/* details */}
                <div>

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
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-10 text-sm font-medium '
                    type="text"
                    placeholder='Enter your full name...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    readOnly={!isEdit}
                />
                <svg className='left-2.5 top-2.5 absolute text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20.37 21.25a.75.75 0 0 1-.75.75H4.38a.75.75 0 0 1-.75-.75c0-4.1 4.5-7.28 8.37-7.28s8.37 3.18 8.37 7.28M17.1 7.11A5.1 5.1 0 1 1 12 2a5.11 5.11 0 0 1 5.1 5.11"/></svg>
                <span className='w-0.5 h-5 bg-thirdBackground absolute top-2.5 rounded-md left-[2.1rem]'></span>
            </div>

            {/* email input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-10 text-sm font-medium '
                    type="text"
                    placeholder='Enter your email...'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    readOnly={!isEdit}
                />
                <svg className='left-2.5 top-2.5 absolute text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 11.96q.125 0 .234-.038q.108-.038.214-.093l7.229-4.733q.142-.086.185-.235t-.016-.297q-.038-.193-.252-.28q-.213-.086-.413.035L12 11L4.82 6.32q-.2-.122-.404-.052t-.262.276q-.058.154-.015.313t.184.24l7.229 4.732q.106.055.214.093q.109.037.234.037"/></svg>
                <span className='w-0.5 h-5 bg-thirdBackground absolute top-2.5 rounded-md left-[2.1rem]'></span>
            </div>

            {/* contact number input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-10 text-sm font-medium '
                    type="text"
                    placeholder='Enter your contact number...'
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                    readOnly={!isEdit}
                />
                <svg className='left-2 top-2.5 absolute text-primary'  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                {/* <p
                    className='text-primary font-medium left-2 top-2.5 absolute '
                >
                    +44
                </p> */}
                <span className='w-0.5 h-5 bg-thirdBackground absolute top-2.5 rounded-md left-[2.1rem]'></span>
            </div>

            {/* contact number input */}
            <div
                className="relative w-full h-fit"
            >
                <input 
                    className='border-2 bg-background border-thirdBackground outline-none rounded-md w-full p-2 pl-10 text-sm font-medium '
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder='Enter your contact number...'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <svg className='left-2 top-2.5 absolute text-primary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"/></svg>
                <span className='w-0.5 h-5 bg-thirdBackground absolute top-2.5 rounded-md left-[2.1rem]'></span>
                <button
                    className='p-2 absolute right-1 text-dimText top-0.5'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    
                    {
                        showPassword
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="m1.75 8s2-4.25 6.25-4.25 6.25 4.25 6.25 4.25-2 4.25-6.25 4.25-6.25-4.25-6.25-4.25z"/><circle cx="8" cy="8" r="1.25" fill="currentColor"/></g>
                          </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="m8.75 3.75c3.5.5 5.5 4.25 5.5 4.25s-.5 1.25-1.5 2.25m-2.5 1.5c-6 2-8.5-3.75-8.5-3.75s.5-1.75 3-3.25"/><path fill="currentColor" d="m8.625 9.08253a1.25 1.25 0 0 1 -1.64894 -.36556 1.25 1.25 0 0 1 .22046 -1.67453l.80348.95756z"/><path d="m3.75 1.75 8.5 12.5"/>
                          </g></svg>
                    }
                </button>
            </div>
                
        </div>

        <button
            className={`${isEdit ? "border-2 border-primary hover:bg-primary hover:scale-110 active:scale-90" : "hover:bg-background"} absolute right-8 bottom-8 p-1 px-3 pr-2 rounded-sm duration-200`}
            onClick={() => setIsEdit(!isEdit)}
        >
            {
                isEdit 
                ?   
                    <span
                        className='flex flex-row-reverse items-center gap-1 w-fit'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7L10 17l-5-5"/>
                        </svg>
                        <p
                            className='text-sm text-text font-medium'
                        >
                            Save
                        </p>
                    </span>  
                :   <svg className='text-dimText' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
                        </g>
                    </svg>
            }
        </button>
    </div>
  )
}

export default UserInfoMenu