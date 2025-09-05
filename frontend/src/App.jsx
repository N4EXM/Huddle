import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import DashboardPage from './pages/DashboardPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {

  const [loading, setIsloading] = useState(false)

  return (
    <div
      className='w-full h-screen'
    >
      <BrowserRouter>
        <Routes>
          <Route
            index
            path='/'
            element={<DashboardPage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
