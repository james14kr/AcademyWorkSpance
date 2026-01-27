import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './reset.css'
import BoardList from './pages/BoardList'
import RegForm from './pages/RegForm'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        {/*게시글 목록 페이지*/}
        <Route path='' element={<BoardList/>}/>
        {/*게시글 상세 조회 페이지*/}
        {/*게시글 등록 페이지*/}
        <Route path='/reg' element={<RegForm/>}/>
        {/*게시글 수정 페이지*/}
      </Routes>

    </>
  )
}

export default App
