import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './component/Login'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './component/Profile'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider> 
      
  )
}

export default App
