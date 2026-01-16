import React, { useState } from 'react'

const Test2 = () => {

  const [stuInfo, setStuInfo] = useState({
    name : '',
    age : '',
    grade : '1학년',
    gender : '남',
    text : ''
  })

  const handleData = (e) => {
    setStuInfo({
      ...stuInfo,
      [e.target.name] : e.target.value
    });
  }

  console.log(stuInfo.text)

  return (
    <>
      <div>
        이름
        <input type="text" name='name' value={stuInfo.name} onChange={ e => handleData(e)}/>
      </div>
      <div>
        나이
        <input type="text" name='age' value={stuInfo.age} onChange={ e => handleData(e)}/>
      </div>
      <div>
        <select value={stuInfo.grade} name='grade' onChange={e => handleData(e)}>
          <option value="1학년">1학년</option>
          <option value="2학년">2학년</option>
          <option value="3학년">3학년</option>
        </select>
      </div>
      <div>
        <input type="radio" name='gender' value='남' onChange={e => handleData(e)} checked ={stuInfo.gender === '남'}/>남
        <input type="radio" name='gender' value='여' onChange={e => handleData(e)} checked = {stuInfo.gender === '여'}/>여
      </div>
      <div>
        <p>소개말</p>
        <textarea value={stuInfo.text} name='text' onChange={e => handleData(e)} rows={5} cols={30} ></textarea>
      </div>
    </>
  )
}

export default Test2