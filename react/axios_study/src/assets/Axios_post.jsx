import axios from 'axios';
import React, { useState } from 'react'

const Axios_post = () => {

  const[data, setData] = useState({
    empNum : "",
    empName : " ",
    depName : "",
    salary : "",
    rank : ""
  });

  const changeInfo = ( e => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  })

  console.log(data)

  const regEmp = e => {
    axios.post("http://localhost:8080/emp", data)
    .then(respsone => {
      alert('통신성공!!')
    })
    .catch( e => {
      console.log(e);
    })
  };

  return (
    <>
      <h3>입력 데이터 Spring으로 전달하기</h3>
      <div>
        사번
        <input 
          type="text"
          name='empNum'
          value={data.empNum}
          onChange={e =>changeInfo(e)}/>
      </div>
      <div>
        이름
        <input
          type="text"
          name='empName'
          onChange={e => changeInfo(e)}/>
      </div>
      <div>
        부서명
        <input 
          type="text"
          name='depName'
          onChange={e => changeInfo(e)} />
      </div>
      <div>
        급여
        <input
          type="text"
          name='salary'
          onChange={e => changeInfo(e)} />
      </div>
      <div>
        직급
        <input 
          type="text"
          name='rank'
          onChange={e => changeInfo(e)} />
      </div>
      <div>
        <button type='button' onClick={e =>regEmp(e)}>등록</button>
      </div>

    </>
  )
}

export default Axios_post