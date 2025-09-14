import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext()

export const MockContextProvider = ({ children }) => {

    // toggles
    const [openProjectMenu, setOpenProjectMenu] = useState(false) // opens the menu to a selected project
    const [openNewProjectMenu, setNewOpenProjectMenu] = useState(false) // opens a new project menu
    const [openUserMenu, setOpenUserMenu] = useState(false) // opens the menu containing user info
    const [openTaskMenu, setOpenTaskMenu] = useState(false) // opens the menu containing a selected task
    const [openNewTaskMenu, setOpenNewTaskMenu] = useState(false) // opens a new task menu  
    const [toggleOverlayBackground, setToggleOverlayBackground] = useState(false) // activates the 
    
    // state data
    const [projectData, setProjectData] = useState({})
    const [taskData, setTaskData] = useState({})
    const [userData, setUserData] = useState({})

    // functions 

    // dataItemType: 1: project 2: task 3: user
    const handleItemData = (dataItemType, dataObject) => {

        if (dataItemType === 1) {
            setProjectData(dataObject)
        }
        else if (dataItemType === 2) {
            setTaskData(dataObject)
        }
        else {
            setUserData(dataObject)
        }

    }

    const handleSelectedProject = (projectData) => {

        handleItemData(1, projectData)
        setOpenProjectMenu(true)

    }

    const handleSelectedTask = (taskData) => {

        handleItemData(2, taskData)
        setOpenTaskMenu(true)

    }
    
    // const handle

    useEffect(() => {
        if (openProjectMenu || openNewProjectMenu || openTaskMenu || openNewTaskMenu || openUserMenu) {
            setToggleOverlayBackground(true)
        }
        else if (openProjectMenu && openNewProjectMenu && openTaskMenu && openNewTaskMenu && openUserMenu) {
            setToggleOverlayBackground(false)
        }
    }, [openProjectMenu, openNewProjectMenu, openTaskMenu, openNewTaskMenu, openUserMenu])

    return (

        <MockContextProvider
            value={{
                setToggleOverlayBackground,
                handleSelectedProject,
                handleSelectedTask
            }}
        >

        </MockContextProvider>

    )

} 