import React from 'react'

function ForEach1() {
  //자바스크립트의 다양한 반복 문법
  const arr = [1,3,5,7,9]

  //일반 for문
  for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
  }

  //for-each문
  for(const e of arr){
    console.log(e);
  }

  //반복 실행 후 리턴 데이터가 없음
  //첫 번째 매개변수 : 하나씩 빼 데이터의 하루
  //두 전째 매개변수 : index
  arr.forEach((e, i) => {
    console.log(`e = ${e}, i = ${i}`)
  })


  arr.map((e, i) => {
    console.log(`e = ${e}, i = ${i}`)
  })

  return (
    <div>ForEach1</div>
  )
}

export default ForEach1