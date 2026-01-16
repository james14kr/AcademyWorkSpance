import React, { useState } from 'react'

const Test3 = () => {

  const[data, setData] = useState({
    menu : '후라이드 치킨',
    count : '',
    date : '',
    intro : '',
  })

  const changeData = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  console.log(data)

  return (
    <>
      <div>
        <h2>치킨</h2>
        <p>치킨 종류와 상관 없이 무조건 만원</p>
        <div>
          <input type="radio" name='menu' value='후라이드 치킨' onChange={e => changeData(e)} checked = {data.menu === '후라이드 치킨'}/>후라이드 치킨
          <input type="radio" name='menu' value='양념 치킨' onChange={e => changeData(e)} checked = {data.menu === '양념 치킨'}/>양념 치킨
          <input type="radio" name='menu' value='간장 치킨' onChange={e => changeData(e)} checked = {data.menu === '간장 치킨'}/>간장 치킨
        </div>
          <div>
            <input type="radio" name='menu' value='고추 바사삭' onChange={e => changeData(e)} checked = {data.menu === '고추 바사삭'}/>고추 바사삭
            <input type="radio" name='menu' value='뿌링클' onChange={e => changeData(e)} checked = {data.menu === '뿌링클'}/>뿌링클
            <input type="radio" name='menu' value='매운맛 치킨' onChange={e => changeData(e)} checked = {data.menu === '매운맛 치킨'}/>매운맛 치킨
          </div>
      </div>
      <div>
        몇마리
        <input type="number" name='count' value={data.count} onChange={e => changeData(e)}/>
      </div>
      <div>
        주문일
        <input type="date" name='date' value={data.date} onChange={e => changeData(e)}/>
      </div>
      <div>
        요청사항
        <textarea name="intro" value={data.intro} onChange={e => changeData(e) } rows={5} cols={30}></textarea>
      </div>
    </>
  )
}

export default Test3