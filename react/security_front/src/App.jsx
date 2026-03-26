import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import Mypage from "./Mypage"
import ProtectedRoute from "./ProtectedRoute"

function App() {
 
  return (
    <>
      <Header/>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="" element = {<Home/>}/>

        {/* 로그인 페이지 */}
        <Route path="/login" element = {<Login/>}/>

        {/* 마이페이지(회원전용) */}
        <Route path="/myPage" element = {<ProtectedRoute><Mypage/></ProtectedRoute>}/>

      </Routes>
    </>
  )
}

export default App
