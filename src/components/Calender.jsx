import React from 'react'
import '/src/App.css'

function Calender() {
  //날짜조회
  let date = new Date();
  let year = date.getFullYear();//년도
  let month = date.getMonth(); //월
  let day = date.getDate();//일


  //달력은 말일을 구해야함. 말일 구하기 공식!
  //0 넣어주면 저번달 마지막날로 감. 이번달 말일은 month + 1.
  let lastDate = new Date(year, month + 1, 0).getDate();
  //달력에서 1일이 시작할 위치
  let start_date = new Date(year, month, 1).getDay(); //요일값이 0~6까지(일~토)
  console.log(lastDate, start_date);
  return (
    <div className="calendar">
      <header>
        <h2>{year}</h2>
        <span>{month + 1}월</span>
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default Calender