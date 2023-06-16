import { useState } from 'react'
import Header from './components/Header'
import Calender from './components/Calender'
//리액트 아이콘 라이브러리
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import './App.css'

function App() {

  
   const changeMonth = () => {

   }
  
  return (
    <>
      <h1>Calender App</h1>
      <div className='calender'>
        <Header />
        <Calender />
      </div>
      <div>
        <button onClick={changeMonth}>Prev</button>
        <button onClick={changeMonth}>Next</button>
      </div>
    </>
  )
}

export default App
