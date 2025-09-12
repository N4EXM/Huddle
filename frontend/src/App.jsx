import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import DashboardPage from './pages/DashboardPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import ProjectsPage from './pages/ProjectsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SelectedProjectPage from './pages/SelectedProjectPage'
import TasksPage from './pages/TasksPage'
import UserDetialsPage from './pages/UserDetailsPage'
import CalendarPage from './pages/CalendarPage'
import { MockProvider } from './context/MockContext'

function App() {

  const [loading, setIsloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true)
    }, 3000)
  }, [])

  return (
    <div
      className='w-full h-screen relative'
    >
      <BrowserRouter>
        <MockProvider>
          <Routes>
            <Route
              index
              path='/'
              element={loading ? <DashboardPage/> : <LoadingPage/>}
            />
            <Route
              path='/Projects'
              element={loading ? <ProjectsPage/> : <LoadingPage/>}
            />
            <Route
              path='/Login'
              element={loading ? <LoginPage/> : <LoadingPage/>}
            />
            <Route
              path='/Register'
              element={loading ? <RegisterPage/> : <LoadingPage/>}
            />
            <Route
              path='/Projects/:name'
              element={loading ? <SelectedProjectPage/> : <LoadingPage/>}
            />
            <Route
              path='/Tasks'
              element={loading ? <TasksPage/> : <LoadingPage/>}
            />
            <Route
              path='/User'
              element={loading ? <UserDetialsPage/> : <LoadingPage/>}
            />
            <Route
              path='/Calendar'
              element={loading ? <CalendarPage/> : <LoadingPage/>}
            />
          </Routes>
        </MockProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App
