import React from 'react'
import { Link } from 'react-router-dom'
import useClickOutside from '../../hooks/useClickOutside'
import ToggleSwitch from './ToggleSwitch'

const SettingsDropdown = ({ MenuState, toggleMenuState, currentUser  }) => {

    const checkClickRef = useClickOutside(() => toggleMenuState(false))

  return (
    <div
        className={`h-fit rounded-md bg-secondBackground border-2 border-primary min-w-60 flex-col items-start shadow-neutral-950 shadow-md absolute right-0 top-12 ${MenuState ? "flex" : "hidden"}`}
        ref={checkClickRef}
    >
        <div
            className='flex flex-row items-center relative w-full h-full gap-2 p-2 px-3 '
        >
            <div
                className='flex flex-row items-center p-1 gap-2 w-fit h-full cursor-pointer rounded-md duration-200'
            >
                <img 
                    src={currentUser.image} 
                    className='rounded-full border-2 border-primary p-0.5 w-9 h-9 object-center object-fit'
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
                className='w-full hover:bg-background text-text hover:text-primary duration-200 rounded-md flex flex-row items-center gap-2 p-2'
                to={"/Settings"}
            >
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                    <path fill="currentcolor" fillRule="evenodd" d="M18.98 2.458c.805-.423 2.358-.958 5.02-.958s4.215.535 5.022.958c.612.32.97.83 1.174 1.256c.29.605.925 1.97 1.48 3.449a18.5 18.5 0 0 1 3.063 1.771c1.56-.26 3.061-.39 3.731-.443c.47-.036 1.09.02 1.675.39c.77.486 2.01 1.563 3.34 3.869c1.332 2.306 1.644 3.918 1.681 4.828c.029.69-.233 1.255-.5 1.645a45 45 0 0 1-2.25 3.01a18.7 18.7 0 0 1 0 3.534a45 45 0 0 1 2.25 3.01c.267.39.529.954.5 1.645c-.037.91-.35 2.522-1.68 4.828c-1.332 2.306-2.572 3.383-3.341 3.87c-.584.37-1.204.425-1.675.389a45 45 0 0 1-3.731-.443a18.5 18.5 0 0 1-3.063 1.771a45 45 0 0 1-1.48 3.449c-.204.426-.562.935-1.174 1.256c-.807.422-2.36.958-5.022.958s-4.215-.535-5.022-.958c-.612-.32-.97-.83-1.174-1.256c-.29-.605-.925-1.97-1.48-3.449a18.5 18.5 0 0 1-3.063-1.771c-1.56.26-3.062.39-3.732.443c-.47.036-1.09-.02-1.674-.39c-.77-.486-2.01-1.563-3.34-3.869c-1.332-2.306-1.645-3.918-1.682-4.828c-.028-.69.234-1.255.5-1.645a45 45 0 0 1 2.25-3.01a18.7 18.7 0 0 1 0-3.534a45 45 0 0 1-2.25-3.01c-.266-.39-.528-.954-.5-1.645c.038-.91.35-2.522 1.681-4.828s2.572-3.383 3.341-3.87c.584-.37 1.204-.425 1.675-.389c.67.052 2.17.184 3.73.443a18.5 18.5 0 0 1 3.064-1.771a45 45 0 0 1 1.48-3.449c.204-.426.562-.935 1.174-1.256ZM32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clipRule="evenodd" />
                </svg>
                <span
                    className='text-text text-sm font-medium'
                >
                    Settings
                </span>
            </Link>

            {/* dark mode button */}
            <div
                className='w-full duration-200 rounded-md flex flex-row items-center gap-2 p-2'
            >
                <div
                    className='w-full items-center justify-start flex flex-row gap-2'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentcolor" d="M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205c1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406" />
                    </svg>
                    <span
                        className='text-text text-sm font-medium'                
                    >
                        Dark mode
                    </span>
                </div>
                <div
                    className='w-fit flex item-end justify-end'
                >
                    <ToggleSwitch
                        disabled={false}
                    />
                </div>
            </div>
        </div>

        <span className='w-full h-0.5 bg-thirdBackground'></span>   

        {/* general buttons */}
        <div
            className='w-full flex flex-col gap-1 p-2 py-3'
        >
            <button
                className='w-full p-2 rounded-md hover:bg-background h-fit flex flex-row items-center gap-2 hover:text-rose-500 duration-200'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h5.903q.214 0 .357.143t.143.357t-.143.357t-.357.143H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h5.904q.214 0 .357.143t.143.357t-.143.357t-.357.143zm12.444-7.5H9.692q-.213 0-.356-.143T9.192 12t.143-.357t.357-.143h8.368l-1.971-1.971q-.141-.14-.15-.338q-.01-.199.15-.364q.159-.165.353-.168q.195-.003.36.162l2.614 2.613q.242.243.242.566t-.243.566l-2.613 2.613q-.146.146-.347.153t-.366-.159q-.16-.165-.157-.357t.162-.35z" />
                </svg>
                <span
                    className='text-sm font-medium text-text'
                >
                    Logout
                </span>
            </button>
        </div>

    </div>
  )
}

export default SettingsDropdown