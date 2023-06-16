import { useState } from 'react'
import Header from './components/Header'
import Calender from './components/Calender'
//리액트 아이콘 라이브러리
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import './App.css'

function App() {
  const[ year, setYear ] = useState(new Date().getFullYear());
  const[ month, setMonth ] = useState(new Date().getMonth());
  const[ day, setDay ] = useState(new Date().getDate());
  //다음달 버튼
  const nextMonth = () => {
    if(month == 11){
      setMonth(0); //1월
      setYear(year + 1); //다음년도
      return;
    }
      setMonth(month + 1);
    
   
  }

  //이전달버튼
  const prevMonth = () => {
    if(month == 0) {
      setMonth(11);
      setYear(year -1)
    } else{
      setMonth(month -1);
    }
   
  }
  return (
    <>
      
      <div className='calender'>
        <Header />
        <Calender year={year} month={month} day={day}/>
      </div>
      <div>
        <button onClick={() => {prevMonth()}}>Prev</button>
        <button onClick={() => {nextMonth()}}>Next</button>
      </div>
    </>
  )
}

export default App
