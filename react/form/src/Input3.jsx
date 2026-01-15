import React, { useState } from 'react'

const Input3 = () => {

  const[data, setData] = useState({
    id : '',
    pw : '',
    name : ''
  });

  console.log(data)

  const changeInfo = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  


  return (
    <>
      아이디
      <input 
        type="text"
        name = "id"
        value={data.id}
        onChange={e => changeInfo(e)}
      />
      <br />

      비밀번호
      <input 
        type="password" 
        name='pw'
        value={data.pw}
        onChange={e => changeInfo(e)}
      />
      <br />
      
      이름
      <input 
        type="text"
        name='name'
        value={data.name}
        onChange={e => changeInfo(e)}
      />
      <br />

      <div>
        {data.id}
      </div>

    </>
  )
}

export default Input3