import React from 'react'
import axios from 'axios'

const Axios1 = () => {

  axios.get('http://localhost:8080/emp')

  .then ((response) => { //매개변수 : 응답에 대한 모든 정보를 가진 객체
    console.log("통신 성공")
    console.log(response);
    console.log(response.data);
  })

  .catch( (error)=> { //매개변수 : 응답 실패에 대한 모든 정보를 가진 객체
    console.log("통신 실패")
  })

  return (
    <div>Axios1</div>
  )
}

export default Axios1