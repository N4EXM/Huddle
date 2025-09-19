import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from '../assets/images/user.png'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    // user data state
    const [user, setUser] = useState({
      userId: 0,
      name: "John Doe",
      email: "JohnDoe01@gmail.com",
      contactNumber: "08976654098",
      image: userImage,
      password: "GenericPassword0982"
    })

    // app data state
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState([])

    const handleCreateProject = (project, tasks) => {

    }

    return (
        <AuthContext.Provider 
            value={{

              // state
              user,
              projects,
              tasks,
              isLoading,

              // set state
              setUser,
              setProjects,
              setTasks,
              setIsLoading

             }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)