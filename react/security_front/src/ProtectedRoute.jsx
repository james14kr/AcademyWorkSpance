import React, { useEffect, useState } from 'react'
import { getToken, isAuthenticated } from './api/authUtil'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

  //토큰 정보
  const token = getToken();

  const[isAccessable, setIsAccessable] = useState(null);

  //마운트되면 로그인 정보에 따라 접근허용을 세팅
  useEffect(()=> {
    if(!isAuthenticated(token)){
      alert('로그인이 필요합니다. \n메인페이지로 이동합니다.')
      setIsAccessable(false)
    }else{
      setIsAccessable(true)
    }
  }, [])

  if(isAccessable === null) return null;

  return isAccessable ? children : <Navigate to={'/'}/>
}

export default ProtectedRoute