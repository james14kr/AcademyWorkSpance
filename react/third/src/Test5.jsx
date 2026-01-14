import React, { useState } from 'react'

const Test5 = () => {

  const [arr, setArr] = useState({
    name : '김자바',
    age : 20,
    address : '울산시'
  });

  return (
    <>
      <div>이름 : {arr.name}</div>
      <div>나이 : {arr.age}</div>
      <div>주소 : {arr.address}</div>

      <button type='button' className='changeName' onClick={ () => {
        setArr({
          ...arr,
          name : '홍길동'
        })
      }}>이름을 홍길동으로 변경</button>

      <button type='button' className='changeAge' onClick={ () => {
        setArr({
          ...arr,
          age : 30
        })
      }}>나이를 30으로 변경</button>

      <button type='button' className='changeAddress' onClick={ () => {
        setArr({
          ...arr,
          address : '서울시'
        })
      }}>주소를 서울시로 변경</button>

    </>
  )
}

export default Test5