import React from 'react'

const NewProjectMenu = ({setOpenMenu}) => {
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
    </div>
  )
}

export default NewProjectMenu