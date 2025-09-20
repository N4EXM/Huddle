import React from 'react'

const TeamMemberCard = ({userId, image, name, email, handleRemoveMember}) => {
  return (
    <div
        className='flex flex-row items-start justify-start bg-background rounded-md p-2 gap-2 border border-thirdBackground' 
    >
        <img 
            src={image}
            alt="userImage"
            className='w-9 h-8 max-h-8 max-w-8 rounded-full' 
        />

        <div
            className='w-full h-full flex-row flex items-center justify-between'
        >

            {/* name and email */}
            <div
                className='flex flex-col gap-0'
            >
                <h1
                    className='font-semibold text-xs'
                >
                    {name}
                </h1>
                <p
                    className='text-dimText text-[10px]'
                >
                    {email}
                </p>
            </div>

            {/* delete button */}
            <button
                className='p-1 rounded-md text-rose-500 hover:text-rose-600 active:text-rose-700 duration-200 hover:scale-125 active:scale-90'
                onClick={() => handleRemoveMember(userId)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4" stroke-width="1.5"/></svg>
            </button>

        </div>
    </div>
  )
}

export default TeamMemberCard