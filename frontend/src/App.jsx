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
    <BrowserRouter>
        <Routes>
          <Route
            index
            path='/'
            element={<DashboardPage/>}
          />
        </Routes>
    </BrowserRouter>
  )
}

export default App
