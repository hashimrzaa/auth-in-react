import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '/src/Screen/Home/Home.jsx'
import Login from '/src/Screen/login/Login.jsx'
import Signup from '../../Screen/Signup/Signup'
import Todos from '../../Screen/Todos/Todos'
import Protectedroutes from './Protectedroutes'


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Protectedroutes component={<Home />} />} />
        <Route path='todo' element={<Protectedroutes component={<Todos />} />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Routing