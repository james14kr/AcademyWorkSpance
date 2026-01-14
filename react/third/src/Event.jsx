import React from 'react'

const Event = () => {

  //구조분해할당 : 배열, 객체에 저장된 다수의 데이터 각각의 편하게 사용하는 방법

  const arr1 = [1, 3.3, 'hello'];
  const [a1, b1, c1] = arr1;

  //자바스크립트에서는 함수도 하나의 자료형으로 취급
  //함수표현식이 대표적인 예

  return (
    <>
      <button type='button' onClick={ () => {
      }}>버튼</button>
    </>
  )
}

export default Event