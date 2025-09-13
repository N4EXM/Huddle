import React, {useState, useEffect} from 'react'

const UserInfoMenu = ({setOpenMenu, currentUser}) => {

    const [isEdit, setIsEdit] = useState(false)

  return (
    <div
        className={`p-5 bg-secondBackground rounded-md flex flex-col gap-10 shadow-2xl col-start-3 w-full h-full`}
    >
        {/* close and edit button */}
        <div
            className={`duration-300 flex flex-row w-full items-center justify-between`}
        >
            <button
                className='p-1 rounded-full bg-background duration-200 hover:bg-primary'
                onClick={() => setOpenMenu(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7l10 10M7 17L17 7" strokeWidth="1"/></svg>
            </button>
            <button
                className='p-1 rounded-full duration-200 hover:bg-background'
                onClick={() => setIsEdit(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"/><path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"/></g></svg>
            </button>
        </div>

        {/* title and user image */}
        <div
            className='flex flex-col gap-8 px-2'
        >

            <h1
                className='font-semibold text-4xl'
            >
                User Details
            </h1>

            <div
                className='relative w-fit h-fit'
            >
                <img 
                    src={currentUser.image}
                    alt=""
                    className='max-h-20 rounded-full border-2 border-primary max-w-20 h-20 w-20'    
                />
                <button
                    className={`${isEdit ? "block" : "hidden"} bg-primary p-1 rounded-full absolute -bottom-1 right-0`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentcolor" d="M13.999 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M3 6a3 3 0 0 1 3-3h7.999a3 3 0 0 1 3 3v3.002a2.9 2.9 0 0 0-1 .229V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v7.999c0 .372.103.721.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l1.745 1.715l-.707.707l-1.738-1.709a.5.5 0 0 0-.701 0l-4.661 4.58A2 2 0 0 0 6 16h3.474q-.024.076-.043.155L9.22 17H6a3 3 0 0 1-3-3zm7.979 9.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.2 2.2 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02"/></svg>
                </button>
            </div>

        </div>

    </div>
  )
}

export default UserInfoMenu