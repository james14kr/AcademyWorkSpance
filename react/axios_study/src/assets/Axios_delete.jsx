import axios from 'axios';
import React, { useState } from 'react'

const Axios_delete = () => {
  //input태그에 입력한 데이터를 저장할 state 변수
  const[empNo, setEmpNo] = useState("");

  const deleteEmp = e =>{
    axios.delete(`http://localhost:8080/emp/${empNo}`)
    .then(Response => alert(Response.data))
    .catch(e => console.log(e));
  }

  return (
    <>
      <h3>데이터 삭제</h3>
      <p>삭제할 사원의 사번을 입력하세요</p>
      <input type="text" onChange={e => setEmpNo(e.target.value)}/>
      <button type='button' onClick={e => deleteEmp(e)}>삭제</button>
    </>
  )
}

export default Axios_delete