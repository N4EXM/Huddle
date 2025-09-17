import React, { useState } from 'react'
import { useModal } from '../../context/ModalContext'

const NewTaskMenu = () => {

    const { currentTasks, setCurrentTasks, openNewTaskMenu, setOpenNewTaskMenu } = useModal()

  return (
    <div
        className={`bg-secondBackground rounded-md border-2 relative border-thirdBackground/40 w-1/3 h-[95vh] ${openNewTaskMenu ? "flex" : "hidden"}`}
    >

        <div
            className='p-5 pb-0 flex flex-col gap-10 w-full h-full  overflow-y-scroll scrollbar-hide'
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

            {/* input fields and tasks */}
            <div
                className='flex flex-col gap-10 px-2 h-fit w-full scrollbar-hide'
            >
                {/* title */}
                <div
                    className='flex flex-col gap-2'
                >
                    <h1
                        className='font-semibold text-2xl'
                    >
                        New Project
                    </h1>
                    <p
                        className='text-sm font-medium text-dimText pr-8'
                    >
                        Enter details into the field to create a new project.
                    </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default NewTaskMenu