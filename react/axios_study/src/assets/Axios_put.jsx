import axios from 'axios'
import React, { useState } from 'react'

const Axios_put = () => {

  const[data, setData] = useState({
    empNum : "",
    empName : "",
    salary : ""
  })

  const changeInfo = (e => {
    setData : ({
      ...data,
      [e.target.name] : e.target.value
    })
  })

  const updataEmp = () => {
    axios.put(`http://localhost:8080/${empNUm}`)
    .then(response => alert('성공'))
    .catch(e => console.log(e))
  }

  return (
    <>
      <h3>사원 정보 수정</h3>
      <div>사번<input type="text" onChange={e => setData(e.target.value)}></input></div>
      <div>
        수정할 부서
        <select>
          <option>개발부</option>
          <option>인사부</option>
          <option>경영부</option>
        </select>
      </div>
      <div>수정할 급여<input type="text"></input></div>
      <div><button type='button' onClick={e => updataEmp(e)}>수정</button></div>
    </>
  )
}

export default Axios_put