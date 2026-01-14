import React, { useState } from 'react'
import './Test2.css'

const Test2 = () => {

  const [status, setStatus] = useState('On');
  const [btn, setBtn] = useState('Off');

  return (
    <>

    <div className='status'>{status}</div>
    <button type='button' onClick={ () => {
      setStatus(status === 'On' ? 'Off' : 'On');
      setBtn(btn === 'On' ? 'Off' : 'On');
    }}>{btn}</button>

    </>
  )
}

export default Test2