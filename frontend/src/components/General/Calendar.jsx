import React from 'react'

const Calendar = ({ isCalendarActive }) => {
  return (
    <div
        className={`min-h-52 min-w-72 bg-background rounded-md border-2 border-primary absolute -bottom-[14rem] right-0 duration-200 transition ${isCalendarActive ? "flex" : "hidden"} flex-col gap-3`}
    >
        
        {/* month buttons and current month/year */}
        <div
            className='flex flex-row w-full items-center justify-between p-3'
        >
            <button
                className='p-1 rounded-full bg-background border-2 border-primary'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path fill="currentcolor" d="m10.108 12l4.246 4.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.344-.15t.364.15t.16.354t-.16.354z" />
                </svg>
            </button>
        </div>


    </div>
  )
}

export default Calendar