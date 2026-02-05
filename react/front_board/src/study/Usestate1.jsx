import React, { useState } from 'react'

//state 변경함수 코드가 해석되면 state 변경함수의 실행은 나머지 코드 실행 완료 후 일괄 실행 됨
//state 변경함수가 여러개 실행되도 1회만 리렌더링 한다.
//state 변경함수 사용법은 두 가지가 존재
//1. setCnt(cnt변수의 저장할 값);
//   ex) setCnt(7);
//2. setCnt((이전 cnt 값) => {return cnt 변수에 저장할 값});
//   ex) setCnt((prev) => {return 7});

const Usestate1 = () => {

  const[cnt, setCnt] = useState(0);
  const[cnt2, setCnt2] = useState(0);

  return (
    <div>
      <h3>{cnt}</h3>
      <h3>{cnt2}</h3>
      <button 
        type='button'
        onClick={ e => {
          console.log(cnt)
          setCnt(cnt + 1);
          console.log(cnt)
          setCnt(cnt + 1);
          console.log(cnt)
        }}
      >클릭</button>
      <button 
        type='button'
        onClick={ e => {
          console.log(cnt2);
          setCnt2(prev => prev+1);
          console.log(cnt2);
          setCnt2(prev => prev+1);
          console.log(cnt2);
        }}
        >클릭</button>
    </div>
  )
}

export default Usestate1