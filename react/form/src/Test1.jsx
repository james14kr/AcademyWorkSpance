import React, { useState } from 'react'
import './Test1.css'

const Test1 = () => {

  const [data, setData] = useState({
    name : '',
    korSc : 0,
    engSc : 0
  });

  const changeInfo = (e) => {
    const {name, value} = e.target;

    setData({
      ...data,
      [name] : name === 'name' ? value : Number(value)
    })

  }

  return (
    <>
      <div className='Test1_container'>
        <div className='inputPage'>
          <div>
            이름
            <input type="text" name='name' value={data.name} onChange={e => changeInfo(e)}/>
          </div>
          <div>
            국어점수
            <input type="text" name='korSc' value={data.korSc} onChange={e => changeInfo(e)}/>
          </div>
          <div>
            영어점수
            <input type="text" name='engSc' value={data.engSc} onChange={e => changeInfo(e)}/>
          </div>
        </div>
        <div className='printPage'>
          <div>입력한 학생 정보입니다.</div>
          <div>
            <p>이름 : {data.name}</p>
            <p>국어점수 : {data.korSc}</p>
            <p>영어점수 : {data.engSc}</p>
            <p>총점 : {data.korSc + data.engSc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test1