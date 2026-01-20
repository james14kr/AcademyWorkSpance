import React, { use, useEffect, useState } from 'react'

const Test = () => {

  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);

  //mount 시점에 실행
  //의존성 배열이 없으면 리렌더링 시점에도 실행
  //useEffect hook 안의 코드는 그림을 다 그린 후 마지막에 실행
  useEffect(() => {
    console.log("useEffect1");
  });

  //의존성 배열이 있어도 mount 시점에 실행
  //의존성 배열이 있으면 리렌더링 시점에는 실행 X
  useEffect(()=>{
    console.log("useEffect2");
  }, []);

  //의존성 배열에 변수가 있다면, 해당 변수의 값이 변경되어 리렌더링 될때 실행
  useEffect( () => {
    console.log("useEffect3");
  }, [cnt1]);

  useEffect( () => {
    console.log("useEffect4")
  }, [cnt1, cnt2]);

  console.log(2);

  return (
    <div>
      <button type='button' onClick={e => setCnt1(cnt1 + 1)}>cnt1 값 변경</button>
      <button type='button' onClick={e => setCnt2(cnt1 + 2)}>cnt2 값 변경</button>
    </div>
  )
}

export default Test