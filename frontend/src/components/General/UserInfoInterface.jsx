import React from 'react'

const UserInfoInterface = ({ openUserMenu, setOpenUserMenu }) => {
  return (
    <div
        className={`p-5 w-full ${openUserMenu ? "grid" : "hidden"} justify-end items-end grid-cols-3 min-h-screen bg-background/60 absolute z-20 left-0 top-0`}
    >
        
        <div
            className={`p-5 bg-secondBackground border-2 border-primary rounded-md flex flex-col gap-5 shadow-2xl col-start-3 ${openUserMenu ? "w-full h-full" : "w-0 h-0"}`}
        >
            
            {/* close and edit button */}
            <div
                className='flex flex-row w-full items-center justify-between'
            >
                <button
                    className='p-1 rounded-full bg-background duration-200 hover:bg-primary'
                    onClick={() => setOpenUserMenu(!openUserMenu)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"/><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"/></g></svg>
                </button>
            </div>

        </div>

    </div>
  )
}

export default UserInfoInterface