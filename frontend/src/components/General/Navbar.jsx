import React, { useState } from 'react'
import userImg from '../../assets/images/user.png'
import OverlayBackground from './OverlayBackground'
import { useMock } from '../../context/MockContext'
import SettingsDropdown from './SettingsDropdown'
import SettingsMenu from '../Modals/SettingsMenu'

const Navbar = () => {

    // info
    const { currentUser } = useMock()

    // toggles
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [toggleOverlay, setToggleOverlay] = useState(false)
    const [openSettingsMenu, setOpenSettingsMenu] = useState(false)

    // state
    const [query, setQuery] = useState("")

    // hook

    // functions
    const handleOpenSettingsMenu = () => {
        setOpenSettingsMenu(true)
        setToggleOverlay(true)
        setOpenUserMenu(false)
    }

    const handleCloseSettingsMenu = () => {
        setOpenSettingsMenu(false)
        setToggleOverlay(false)
    }

    
  return (
    <div
        className='w-full col-start-4 col-span-9 p-6 py-10 row-span-1 bg-background flex items-center justify-between '
    >

        <OverlayBackground
            toggleOverlayBackground={toggleOverlay}
        >
            {
                openSettingsMenu &&
                <SettingsMenu
                    handleCloseSettingsMenu={handleCloseSettingsMenu}
                />
            }
            
        </OverlayBackground>

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
            <SettingsDropdown
                MenuState={openUserMenu}
                toggleMenuState={setOpenUserMenu}
                handleOpenSettingsMenu={handleOpenSettingsMenu}
                currentUser={currentUser}
            />

        </div>
        

    </div>
  )
}

export default Navbar