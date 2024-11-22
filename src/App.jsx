import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Welcome from './pages/Welcome/Welcome'
import Home from './pages/Home/Home'
import PrivateRoute from './lib/PrivateRoute/PrivateRoute'
import AuthPage from './pages/authPage/AuthPage'

function App() {
  return (
    <Routes>
    <Route path='/' element={<PrivateRoute/>}>
    <Route path='/' element={<Home/>}/>
    </Route>
    
    <Route path='/welcome' element={<Welcome/>}/>
    <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
  )
}

export default App
