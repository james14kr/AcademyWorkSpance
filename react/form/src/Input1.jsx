import React, { useState } from 'react'

const Input1 = () => {

  const[data, setData] = useState('');

  return (
    <>
      <input type="text" value={data} onChange={(e) => {
        setData(e.target.value);
      }}/>

      <h2>{data}</h2>

    </>
  )
}

export default Input1