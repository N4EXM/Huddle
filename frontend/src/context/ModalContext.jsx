import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

    // toggles
    const [openProjectMenu, setOpenProjectMenu] = useState(false)
    const [openNewProjectMenu, setNewOpenProjectMenu] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [openTaskMenu, setOpenTaskMenu] = useState(false)
    const [openNewTaskMenu, setOpenNewTaskMenu] = useState(false)
    const [toggleOverlayBackground, setToggleOverlayBackground] = useState(false)
    
    // state data
    const [currentTasks, setCurrentTasks] = useState([]) // tasks to be added to a new project
    const [projectData, setProjectData] = useState({})
    const [taskData, setTaskData] = useState({})
    const [userData, setUserData] = useState({}) // Added missing userData state

    // functions 
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

    useEffect(() => {
        // Check if any menu is open
        const anyMenuOpen = openProjectMenu || openNewProjectMenu || openTaskMenu || openNewTaskMenu || openUserMenu;
        
        setToggleOverlayBackground(anyMenuOpen);
        
        // Log the NEW value (this will show in next render)
        console.log("Overlay background:", anyMenuOpen);
    }, [openProjectMenu, openNewProjectMenu, openTaskMenu, openNewTaskMenu, openUserMenu])

    // If you want to see the updated state value, use another useEffect
    useEffect(() => {
        console.log("Updated overlay background state:", toggleOverlayBackground);
    }, [toggleOverlayBackground])

    return (
        <ModalContext.Provider
            value={{
                // States
                toggleOverlayBackground,
                openProjectMenu,
                openNewProjectMenu,
                openUserMenu,
                openTaskMenu,
                openNewTaskMenu,
                projectData,
                taskData,
                userData,
                currentTasks,
                
                // Setters
                setToggleOverlayBackground,
                setOpenProjectMenu,
                setNewOpenProjectMenu,
                setOpenUserMenu,
                setOpenTaskMenu,
                setOpenNewTaskMenu,
                setProjectData,
                setTaskData,
                setUserData,
                setCurrentTasks,
                
                // Functions
                handleSelectedProject,
                handleSelectedTask,
                handleItemData
            }}
        >
            {children}
        </ModalContext.Provider>
    )
} 

export const useModal = () => useContext(ModalContext)