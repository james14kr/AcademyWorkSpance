import React from 'react'

//jsx에서는 변수를 html로 표현 할 수 있음
const Variable = () => {

  const num = 10;
  const name  = "kim";
  const arr = [1, 2, 3];
  const data = null;
  //undefined : 정의되지 않므
  //변수는 있지만 초기값이 없을 때
  const data2 = undefined;

  const person = {
    name : 'kim',
    age : 20
  }

  return (
    <>
      <div>{num}</div>
      <div>{name}</div>
      <div>{arr[1]}</div>
      <div>{arr}</div>
      <div>data = {data}</div>
      <div>data2 = {data2}</div>
      <div>{person.age}</div>

    </>
    
  )
}

export default Variable