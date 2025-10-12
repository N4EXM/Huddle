import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    // user data state
    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider 
            value={{

              // state
              user,

              // set state
              setUser,

             }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)