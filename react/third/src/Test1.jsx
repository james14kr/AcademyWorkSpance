import React, { useState } from 'react'
import './Test1.css'

const Test1 = () => {

  const [num, setNum] = useState(0);

  return (
    <>
      <h2>클릭 횟수를 화면에 나타내는 문제</h2>
      <div className='red_rect'>{num}</div>
      <button type='button' onClick={ () => {
        setNum(num+1)
      }}>클릭</button>
    </>
  )
}

export default Test1