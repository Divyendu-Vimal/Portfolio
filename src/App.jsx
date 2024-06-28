import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Project from './Components/Project/Project'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
    </>
  )
}

export default App