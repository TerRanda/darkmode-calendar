import { useState } from 'react'
//리액트 아이콘 라이브러리
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import './App.css'
//다크모드
function App() {
  const [dark, setDark] = useState(true)
  
   
  
  return (
    <>
    
    <div className={ dark ? "App" : 'App darkmode'}>
      <h1 className='blink'>FRIDAYYYYYYYYYYYYYYYYY</h1>
      <img src='./images/ham.jpg' />
      <p className='colorFont'>    
      국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 
      대한민국의 국민이 되는 요건은 법률로 정한다. 
      제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
      </p>
      
      <button onClick={() => setDark(!dark)}>{dark ? <MdOutlineDarkMode /> : <MdDarkMode />}</button>
      
    </div>
    </>
  )
}

export default App
