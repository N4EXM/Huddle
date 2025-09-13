import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext()

export const MockContextProvider = ({ children }) => {

    // toggles
    const [openProjectMenu, setOpenProjectMenu] = useState(false) // opens the menu to a selected project
    const [openNewProjectMenu, setNewOpenProjectMenu] = useState(false) // opens a new project menu
    const [openUserMenu, setOpenUserMenu] = useState(false) // opens the menu containing user info
    const [openTaskMenu, setOpenTaskMenu] = useState(false) // opens the menu containing a selected task
    const [openNewTaskMenu, setOpenNewTaskMenu] = useState(false) // opens a new task menu  

} 