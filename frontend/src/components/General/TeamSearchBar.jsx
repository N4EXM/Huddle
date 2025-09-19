import React, { useState } from 'react'

const TeamSearchBar = () => {

    const [isLoading, setIsLoading] = useState(false)

  return (
    <div
        className='flex flex-row items-center gap-3 w-full relative'
    >
        <input 
            type="text" 
            placeholder='Search by name'
            className='bg-background rounded-md border-2 text-xs border-thirdBackground p-2 pl-3 w-full outline-none'
        />
        <button
            className='p-1.5 rounded-md bg-primary hover:bg-primary/80 duration-200 active:bg-primary/60'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokeWidth="1.5" d="M12 4.5v15m7.5-7.5h-15"/></svg>
        </button>
    </div>
  )
}

export default TeamSearchBar