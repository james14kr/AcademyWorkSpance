import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  // useNavigate hook은 함수를 리턴
  //useNavigate 결과를 전달하는 변수는 함수처럼 사용하면 됨
  const nav = useNavigate(); //nav();

  return (
    <>
      <p>페인 페이지입니다</p>

      <button type="button" onClick={e => {nav('/first')}}>클릭하면 first페이지로 이동</button>

    </>
  )
}

export default Home