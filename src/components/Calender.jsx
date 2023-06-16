import React, { useState } from 'react'
import '/src/App.css'

function Calender(props) {
  //날짜조회
  let date = new Date();
  let year = props.year;//년도
  let month = props.month; //월
  let day = props.day;//일
// let {year, month, day} = props; << 로 쓸 수도 있음.

  //달력은 말일을 구해야함. 말일 구하기 공식!
  //0 넣어주면 저번달 마지막날로 감. 이번달 말일은 month + 1.
  let lastDate = new Date(year, month + 1, 0).getDate();
  //달력에서 1일이 시작할 위치
  let start_date = new Date(year, month, 1).getDay(); //요일값이 0~6까지(일~토)
  console.log(lastDate, start_date);

  const changeMonth = (action) => {
    
  }
  
  return (
    <div className="calendar">
      <header>
        <h1>{year}</h1>
        <span>{month + 1}월</span>
      </header>
      <main>
        <ul className='date'>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
          
          {
            Array(start_date).fill().map((_, arr) => {
              return(

              <li key={arr} style={{border: "none"}}></li> 
              
              )
            })
          }
          {
            Array(lastDate).fill().map((_, arr) => {
              return(

              <li key={arr} style={ arr === new Date().getDate()-1 && month === new Date().getMonth() ? {background: 'lightblue'} : null}>{arr + 1}</li> 
              
              )
            })
          }
          {/* {
            Array(lastDate).fill().map((_, arr) => {
              return(

              <li key={arr} style={ arr === 0 ? {gridColumnStart: start_date+1 } : null}>{arr + 1}</li> 
              
              )
            })
          } */}
        </ul>
      </main>
    </div>
  )
}

export default Calender