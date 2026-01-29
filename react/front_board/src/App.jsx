import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './reset.css'
import BoardList from './pages/BoardList'
import RegForm from './pages/RegForm'
import BoardDetail from './pages/BoardDetail'

function App() {

  return (
    <>
      <Header/>

      {/* 모든 페이지가 보여질 내역 */}

      <div style={{width : '60%', margin : '30px auto'}}>

        <Routes>
        {/*게시글 목록 페이지*/}
        <Route path='/' element={<BoardList/>}/>
        {/*게시글 상세 조회 페이지*/}
        <Route path='/detail/:boardNum' element={<BoardDetail/>}/>
        {/*게시글 등록 페이지*/}
        <Route path='/reg' element={<RegForm/>}/>
        {/*게시글 수정 페이지*/}
        </Routes>

      </div>

      

    </>
  )
}

export default App
