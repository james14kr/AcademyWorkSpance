import React, { useState } from 'react'
import './Test6.css'

const Test6 = () => {

  const[num, setNum] = useState(0);

  return (
    <div className='test6_container'>
      <div className='header'>
        <h2>Simple Counter</h2>
      </div>
      <div className='main'>
        <div className='cntDisplay'>
          <p>현재 카운트 : </p>
          <p>{num}</p>
        </div>
  
        <div className='btnDisplay'>
          <button type='button' onClick={ () => {
            setNum(num - 1);
          }}>-1</button>
          <button type='button' onClick={ () => {
            setNum(num - 10);
          }}>-10</button>
          <button type='button' onClick={ () => {
            setNum(num - 100);
          }}>-100</button>
          <button type='button' onClick={ () => {
            setNum(num + 100);
          }}>+100</button>
          <button type='button' onClick={ () => {
            setNum(num + 10);
          }}>+10</button>
          <button type='button' onClick={ () => {
            setNum(num + 1);
          }}>+1</button>
        </div>

      </div>
    </div>
  )
}

export default Test6