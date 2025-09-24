import React from 'react'

const ProjectMenu = ({ setToggleOverlay, isSelectedProjectActive, setIsSelectedProjectActive, selectedProject }) => {

    

    // functions 
    const handleClosePage = () => {
        setIsSelectedProjectActive(false)
        setToggleOverlay(false)
    }

  return (
        <div
            className={`${isSelectedProjectActive ? "flex" : "hidden"} bg-secondBackground rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh]`}
        >
            <div
                className={`p-5  flex flex-col gap-8 w-full h-full scrollbar-hide overflow-y-scroll`}
            >
                {/* close button */}
                <div
                    className={`duration-300 flex flex-row w-full items-center justify-between`}
                >
                    <button
                        className='p-1 rounded-full bg-background duration-200 hover:bg-primary'
                        onClick={() => handleClosePage()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
                    </button>
                </div>
            </div>
        </div>
        )
}

export default ProjectMenu