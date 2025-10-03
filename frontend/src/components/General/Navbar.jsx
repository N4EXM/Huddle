import React, { useState } from 'react'
import userImg from '../../assets/images/user.png'
import OverlayBackground from './OverlayBackground'
import { useMock } from '../../context/MockContext'
import useClickOutside from '../../hooks/useClickOutside'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // info
    const { currentUser } = useMock()

    // toggles
    const [openUserMenu, setOpenUserMenu] = useState(false)

    // state
    const [query, setQuery] = useState("")

    // hook
    const ref = useClickOutside(() => setOpenUserMenu(false))

    
  return (
    <div
        className='w-full col-start-4 col-span-9 p-6 py-10 row-span-1 bg-background flex items-center justify-between '
    >
        {/* search bar */}
        <div
            className='relative flex items-center justify-start'
        >
            <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className='bg-secondBackground border-2 rounded-md w-96 outline-none text-xs p-2 pl-10 border-thirdBackground'
                placeholder='Search...' 
            />
            <i
                className='absolute top-2.5 left-3 text-dimText'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="currentColor" d="M31.398 33.162A15.94 15.94 0 0 1 21 37c-8.837 0-16-7.163-16-16S12.163 5 21 5s16 7.163 16 16c0 3.967-1.444 7.598-3.835 10.393l9.473 9.473a1.25 1.25 0 0 1-1.768 1.768zM34.5 21c0-7.456-6.044-13.5-13.5-13.5S7.5 13.544 7.5 21S13.544 34.5 21 34.5S34.5 28.456 34.5 21"/></svg>
            </i>
            {
                query !== ""
                ?   <button
                        className='absolute right-2.5 top-2 duration-200 hover:bg-primary hover:text-secondBackground rounded-full'
                        onClick={() => setQuery("")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1.2"/></svg>
                    </button>
                :   <p
                        className='text-[10px] font-medium absolute top-[0.42.5rem] right-2.5 px-1.5 bg-background p-1 rounded-sm text-dimText'
                    >   
                        Ctrl + K
                    </p>
            }
            
        </div>

        {/* user profile and dark mode */}
        <div
            className='flex flex-row items-center gap-2 relative'
        >
            <button
                className='p-1.5 rounded-full bg-secondBackground hover:bg-primary active:bg-primary/80 hover:text-background duration-200'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path strokeWidth="2" fill="currentcolor" d="M12 17.75A5.75 5.75 0 1 1 17.75 12A5.76 5.76 0 0 1 12 17.75m0-10A4.25 4.25 0 1 0 16.25 12A4.26 4.26 0 0 0 12 7.75M12 5a.76.76 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A.76.76 0 0 1 12 5m0 17a.76.76 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A.76.76 0 0 1 12 22m9.25-9.25h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5m-17 0h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5m2.25-5.5A.74.74 0 0 1 6 7L4.91 6A.75.75 0 1 1 6 4.91L7 6a.75.75 0 0 1 0 1a.74.74 0 0 1-.5.25m12.06 12.06a.74.74 0 0 1-.53-.22L17 18a.75.75 0 0 1 1-1l1.09 1a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.25M17.5 7.25A.74.74 0 0 1 17 7a.75.75 0 0 1 0-1l1-1.09A.75.75 0 1 1 19.09 6L18 7a.74.74 0 0 1-.5.25M5.44 19.31a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L6 17a.75.75 0 0 1 1 1l-1 1.09a.74.74 0 0 1-.56.22" />
                </svg>
            </button>

            <div
                className='flex flex-row items-center gap-2 w-fit h-full cursor-pointer rounded-md duration-200'
                onClick={() => setOpenUserMenu(!openUserMenu)}
            >
                <img 
                    src={currentUser.image} 
                    className='rounded-full border-2 border-primary w-9 h-9 object-center object-fit'
                    alt="" 
                />
            </div>

            {/* user drop down menu */}
            <div
                className={`h-fit rounded-md bg-secondBackground border-2 border-primary min-w-60 flex-col items-start shadow-neutral-950 shadow-md absolute right-0 top-12 ${openUserMenu ? "flex" : "hidden"}`}
                ref={ref}
            >
                <div
                    className='flex flex-row items-center relative w-full h-full gap-2 p-2 px-3 '
                >
                    <div
                        className='flex flex-row items-center p-1 gap-2 w-fit h-full cursor-pointer rounded-md duration-200'
                    >
                        <img 
                            src={currentUser.image} 
                            className='rounded-full border-2 border-primary w-9 h-9 object-center object-fit'
                            alt="" 
                        />
                    </div>
                    <div
                        className='flex flex-col gap-0 w-fit h-full items-start'
                    >
                        <h1
                            className='font-bold text-sm'
                        >
                            {currentUser.name}
                        </h1>
                        <p
                            className='text-xs  text-dimText'
                        >
                            {currentUser.email}
                        </p>
                    </div>
                </div>
                <span className='w-full h-0.5 bg-thirdBackground'></span>   
                {/* buttons */}
                <div
                    className='w-full flex flex-col gap-1 p-2'
                >
                    <Link
                        className='w-full hover:bg-background text-dimText hover:text-primary duration-200 rounded-md flex flex-row items-center gap-2 p-2'
                        to={"/Settings"}
                    >
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="currentcolor" fillRule="evenodd" d="M18.98 2.458c.805-.423 2.358-.958 5.02-.958s4.215.535 5.022.958c.612.32.97.83 1.174 1.256c.29.605.925 1.97 1.48 3.449a18.5 18.5 0 0 1 3.063 1.771c1.56-.26 3.061-.39 3.731-.443c.47-.036 1.09.02 1.675.39c.77.486 2.01 1.563 3.34 3.869c1.332 2.306 1.644 3.918 1.681 4.828c.029.69-.233 1.255-.5 1.645a45 45 0 0 1-2.25 3.01a18.7 18.7 0 0 1 0 3.534a45 45 0 0 1 2.25 3.01c.267.39.529.954.5 1.645c-.037.91-.35 2.522-1.68 4.828c-1.332 2.306-2.572 3.383-3.341 3.87c-.584.37-1.204.425-1.675.389a45 45 0 0 1-3.731-.443a18.5 18.5 0 0 1-3.063 1.771a45 45 0 0 1-1.48 3.449c-.204.426-.562.935-1.174 1.256c-.807.422-2.36.958-5.022.958s-4.215-.535-5.022-.958c-.612-.32-.97-.83-1.174-1.256c-.29-.605-.925-1.97-1.48-3.449a18.5 18.5 0 0 1-3.063-1.771c-1.56.26-3.062.39-3.732.443c-.47.036-1.09-.02-1.674-.39c-.77-.486-2.01-1.563-3.34-3.869c-1.332-2.306-1.645-3.918-1.682-4.828c-.028-.69.234-1.255.5-1.645a45 45 0 0 1 2.25-3.01a18.7 18.7 0 0 1 0-3.534a45 45 0 0 1-2.25-3.01c-.266-.39-.528-.954-.5-1.645c.038-.91.35-2.522 1.681-4.828s2.572-3.383 3.341-3.87c.584-.37 1.204-.425 1.675-.389c.67.052 2.17.184 3.73.443a18.5 18.5 0 0 1 3.064-1.771a45 45 0 0 1 1.48-3.449c.204-.426.562-.935 1.174-1.256ZM32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clipRule="evenodd" />
                        </svg>
                        <span
                            className='text-dimText text-sm font-medium'
                        >
                            Settings
                        </span>
                    </Link>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default Navbar