import { useState } from 'react'
import './App.css'
import './output.css'
import HeaderMainPAge from './LayoutApp/header'
import LoginForm from './pages/authPage/loginComponent'
import BodyMainPage from './LayoutApp/body'
import {Routes, Route, Link } from "react-router";
import RestPage from './pages/authPage/restPage/restPage'
import DishPage from './pages/authPage/dishesPage/dishes'

function App() {
  return (
    <>
      <HeaderMainPAge/>
      <Routes>
        <Route path="/" element={<BodyMainPage/>}/>
        <Route path="restoraunts" element={<RestPage/>}/>
        <Route path='dishes' element={<DishPage/>}/>
      </Routes> 
    </>
  )
}

export default App
