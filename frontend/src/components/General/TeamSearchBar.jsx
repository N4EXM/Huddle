import React, { useEffect, useState } from 'react'

const TeamSearchBar = ({ searchQuery, setSearchQuery, filteredUsers, handleAddMember }) => {

    const [isDropDownActive, setIsDropDownActive] = useState(false)
    
    useEffect(() => {
        if (searchQuery !== "") {
            setIsDropDownActive(true)
        }
        else {
            setIsDropDownActive(false)
        }
    }, [searchQuery])

  return (
    <div
        className='flex flex-col w-full h-full gap-4 relative'
    >
        <div
            className='flex flex-row items-center gap-3 w-full relative'
        >
            <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search by name'
                className='bg-background rounded-md border-2 text-xs border-thirdBackground p-2 pl-9 w-full outline-none'
            />
            <button
                className=' rounded-md duration-200 absolute top-2.5 right-2.5 cursor-pointer '
                onClick={() => setSearchQuery("")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                    <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m8 8l32 32M8 40L40 8" />
                </svg>
            </button>
            <svg className='absolute top-2 left-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="currentcolor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
                    <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06" />
                </g>
            </svg>
        </div>
        <div
            className={`flex-col border-2 border-thirdBackground absolute top-12 left-0 rounded-md w-full bg-secondBackground divide-y-2 divide-thirdBackground transition-all duration-300 ease-in-out ${
                isDropDownActive 
                    ? "flex opacity-100 translate-y-0" 
                    : "hidden opacity-0 -translate-y-2"
            }`}
            style={{ maxHeight: '200px', overflowY: 'auto' }}
        >  
            {filteredUsers.map((user, index) => (
                <div
                    key={user.userId} // Always add keys!
                    className={`flex flex-row items-center hover:bg-background bg-secondBackground gap-2 duration-200 p-2 cursor-pointer transition-colors ${
                        index === 0 && "rounded-t-md"
                    } ${
                        index === filteredUsers.length - 1 && "rounded-b-md"
                    }`}
                    onClick={() => handleAddMember(user)}
                >
                    <img 
                        src={user.image} 
                        alt="userImage"
                        className='w-9 h-8 max-h-8 max-w-8 rounded-full object-cover transition-transform duration-200 hover:scale-105' 
                    />
                    <div className='flex flex-col gap-0'>
                        <h1 className='font-semibold text-xs'>{user.name}</h1>
                        <p className='text-dimText text-[10px]'>{user.email}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TeamSearchBar