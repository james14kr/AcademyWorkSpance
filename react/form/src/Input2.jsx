import React, { use, useState } from 'react'

const Input2 = () => {

  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

  console.log(data1, data2);

  return (
    <>
    
      <input type="text" value={data1} onChange={ e => setData1(e.target.value)} />

      <input type="text" value={data2} onChange={ e => setData2(e.target.value)} />


    </>
  )
}

export default Input2