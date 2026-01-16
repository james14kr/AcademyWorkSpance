// import React, { useState } from 'react'
// import './Test4.css'

// const Test4 = () => {

//   const[data, setData] = useState({
//     //학력
//     education : '대졸',
//     //학교명
//     schoolName : '',
//     //지원구분
//     supportCat : '신입',
//     //자격증명
//     credentials : '',
//     //취득일자
//     acquisitionDate : '',
//     //발행기관
//     lssuer : '',
//     //회사명
//     companyName : '',
//     //담당업무
//     responsibilities : '',
//     //경력기간(년)
//     careerPeriodYear : '',
//     //경력기간(개월)
//     careerPeriodMonth : '',
//     //자기소개
//     selfIntroduction : ''
//   })

//   const changeData = (e) => {
//     setData({
//       ...data,
//       [e.target.name] : e.target.value
//     })
//   }

//   console.log(data)

//   return (
//     <div className='container'>
//       <h1>이력서 정보</h1>
//       <div className='education_div'>
//         <div>학력</div>
//         <div>
//           <select name="education" value={data.education} onChange={ e => changeData(e)}>
//             <option value="대졸">대졸</option>
//             <option value="대학졸업예정">대학졸업예정</option>
//             <option value="전문대졸">전문대졸</option>
//             <option value="고졸">고졸</option>
//           </select>
//           <input type="text" name="schoolName" value={data.schoolName} onChange={e => changeData(e)} placeholder='학교명'/>
//         </div>
//       </div>
//       <div className='supportCat'>
//         <div>지원구분</div>
//         <div>
//           <input type="radio" name='supportCat' value='신입' onChange={e => changeData(e)} checked = {data.supportCat === "신입"}/>신입
//           <input type="radio" name='supportCat' value='경력' onChange={e => changeData(e)} checked = {data.supportCat === "경력"}/>경력
//         </div>
//       </div>
//       <div>
//         <div>자격정보</div>
//         <div className='table'>
//           <div className='itemTitle'>자격증명</div>
//           <div className='itemTitle'>취득일자</div>
//           <div className='itemTitle'>발행기관</div>
//           <div className='item'><input type="text" name="credentials" value={data.credentials} onChange={e => changeData(e)}/></div>
//           <div className='item'><input type="date" name='acquisitionDate'value={data.acquisitionDate} onChange={e => changeData(e)}/></div>
//           <div className='item'><input type="text" name='lssuer' value={data.lssuer} onChange={e => changeData(e)}/></div>
//         </div>
//       </div>
//       <div>
//         <div>경력정보</div>
//         <div className='table'>
//           <div className='itemTitle'>회사명</div>
//           <div className='itemTitle'>담당업무</div>
//           <div className='itemTitle'>경력기간</div>
//           <div className='item'><input type="text" name="companyName" value={data.companyName} onChange={e => changeData(e)}/></div>
//           <div className='item'><input type="text" name='responsibilities'value={data.responsibilities} onChange={e => changeData(e)}/></div>
//           <div className='item'><input type="text" name='careerPeriodYear' value={data.careerPeriodYear} onChange={e => changeData(e)}/>년 <input type="text" name="careerPeriodMonth" value={data.careerPeriodMonth} onChange={e => changeData(e)} />개월</div>
//         </div>
//       </div>
//       <div>
//         <div>자기소개</div>
//         <div><textarea name="selfIntroduction" value={data.selfIntroduction} onChange={e => changeData(e)} rows={5} cols={30}></textarea></div>
//       </div>
//     </div>
//   )
// }

// export default Test4

import React, { useState } from 'react'
import './Test4.css'

const Test4 = () => {
  const [data, setData] = useState({
    education: '대졸',
    schoolName: '',
    supportCat: '신입',
    credentials: '',
    acquisitionDate: '',
    issuer: '',
    companyName: '',
    responsibilities: '',
    careerPeriodYear: '',
    careerPeriodMonth: '',
    selfIntroduction: ''
  })

  const changeData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div className="container">
      <h1 className="page-title">이력서 정보</h1>

      {/* 학력 */}
      <div className="form-row">
        <div className="form-label">학력</div>
        <div className="form-field education-field">
          <select name="education" value={data.education} onChange={changeData}>
            <option value="대졸">대졸</option>
            <option value="대학졸업예정">대학졸업예정</option>
            <option value="전문대졸">전문대졸</option>
            <option value="고졸">고졸</option>
          </select>
          <input
            type="text"
            name="schoolName"
            value={data.schoolName}
            onChange={changeData}
            placeholder="학교명"
          />
        </div>
      </div>

      {/* 지원구분 */}
      <div className="form-row">
        <div className="form-label">지원구분</div>
        <div className="form-field radio-group">
          <label>
            <input
              type="radio"
              name="supportCat"
              value="신입"
              checked={data.supportCat === '신입'}
              onChange={changeData}
            />
            신입
          </label>

          <label>
            <input
              type="radio"
              name="supportCat"
              value="경력"
              checked={data.supportCat === '경력'}
              onChange={changeData}
            />
            경력
          </label>
        </div>
      </div>

      {/* 자격정보 */}
      <div className="section">
        <div className="section-title">자격정보</div>
        <div className="grid-table">
          <div className="grid-header">자격증명</div>
          <div className="grid-header">취득일자</div>
          <div className="grid-header">발행기관</div>

          <div className="grid-cell">
            <input
              type="text"
              name="credentials"
              value={data.credentials}
              onChange={changeData}
            />
          </div>

          <div className="grid-cell">
            <input
              type="date"
              name="acquisitionDate"
              value={data.acquisitionDate}
              onChange={changeData}
            />
          </div>

          <div className="grid-cell">
            <input
              type="text"
              name="issuer"
              value={data.issuer}
              onChange={changeData}
            />
          </div>
        </div>
      </div>

      {/* 경력정보 */}
      {data.supportCat === '경력' && (
        <div className="section">
          <div className="section-title">경력정보</div>
          <div className="grid-table">
            <div className="grid-header">회사명</div>
            <div className="grid-header">담당업무</div>
            <div className="grid-header">경력기간</div>

            <div className="grid-cell">
              <input
                type="text"
                name="companyName"
                value={data.companyName}
                onChange={changeData}
              />
            </div>

            <div className="grid-cell">
              <input
                type="text"
                name="responsibilities"
                value={data.responsibilities}
                onChange={changeData}
              />
            </div>

            <div className="grid-cell period-field">
              <input
                type="number"
                name="careerPeriodYear"
                value={data.careerPeriodYear}
                onChange={changeData}
              />
              <span>년</span>
              <input
                type="number"
                name="careerPeriodMonth"
                value={data.careerPeriodMonth}
                onChange={changeData}
              />
              <span>개월</span>
            </div>
          </div>
        </div>
      )}

      {/* 자기소개 */}
      <div className="form-row vertical">
        <div className="form-label">자기소개</div>
        <div className="form-field">
          <textarea
            name="selfIntroduction"
            value={data.selfIntroduction}
            onChange={changeData}
          />
        </div>
      </div>
    </div>
  )
}

export default Test4
