import React, { useState } from 'react'
import userImg from '../../assets/images/user.png'
import OverlayBackground from './OverlayBackground'
import { useMock } from '../../context/MockContext'


const Navbar = () => {

    // toggles
    const [openMenu, setOpenMenu] = useState(false)

    // info
    const { currentUser } = useMock()

  return (
    <div
        className='w-full col-start-4 col-span-9 p-5 px-4 rounded-lg row-span-2 bg-secondBackground mb-8 flex items-center justify-between '
    >
        {/* search bar */}
        <div
            className='relative flex items-center justify-start'
        >
            <input 
                type="text"
                className='p-2 pl-12 text-sm bg-accent rounded-md w-64 outline-none '
                placeholder='Search...' 
            />
            <i
                className='absolute top-[9px] left-3 text-dimText'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="currentColor" d="M31.398 33.162A15.94 15.94 0 0 1 21 37c-8.837 0-16-7.163-16-16S12.163 5 21 5s16 7.163 16 16c0 3.967-1.444 7.598-3.835 10.393l9.473 9.473a1.25 1.25 0 0 1-1.768 1.768zM34.5 21c0-7.456-6.044-13.5-13.5-13.5S7.5 13.544 7.5 21S13.544 34.5 21 34.5S34.5 28.456 34.5 21"/></svg>
            </i>
            <p
                className='text-xs font-medium absolute top-[0.4375rem] right-2.5 px-1.5 bg-background p-1 rounded-sm text-dimText'
            >   
                Ctrl + K
            </p>
        </div>

        {/* user profile */}
        <div
            className='flex flex-row items-center gap-2 w-fit h-full cursor-pointer rounded-md duration-200'
            onClick={() => setOpenMenu(true)}
        >
            <img 
                src={currentUser.image} 
                className='rounded-full border-2 border-primary w-9 h-9 object-center object-fit'
                alt="" 
            />
            {/* <div
                className='flex flex-col'
            >
                <span
                    className='text-sm font-bold'
                >
                    {currentUser.name}
                </span>
                <span
                    className='text-(length:--font-size-xxs)'
                >
                    {currentUser.email}
                </span>
            </div> */}
        </div>

    </div>
  )
}

export default Navbar