import React from "react"
import { useParams } from "react-router-dom"

const First = () => {

  //URL Parameter로 전달되는 데이터 받기
  useParams();
  return (
    <>
      <p>첫 번째 페이지입니다.</p>
    </>
  )
}

export default First