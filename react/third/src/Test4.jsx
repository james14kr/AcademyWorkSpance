import React, { useState } from 'react'
import './Test4.css'

const Test4 = () => {

  const [btn, setBtn] = useState({
    btn1 : 0,
    btn2 : 0,
    btn3 : 0
  });

  return (
    <>

      <button type='button' className='button' onClick={ () => {
        setBtn({
          ...btn,
          btn1: btn.btn1 + 1
        });
      }}>{btn.btn1}</button>

      <button type='button' className='button' onClick={ () => {
        setBtn({
          ...btn,
          btn2: btn.btn2 + 1
        });
      }}>{btn.btn2}</button>

      <button type='button' className='button' onClick={ () => {
        setBtn({
          ...btn,
          btn3: btn.btn3 + 1
        });
      }}>{btn.btn3}</button>
    </>

  )
}

export default Test4