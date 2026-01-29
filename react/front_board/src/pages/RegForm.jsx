import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegForm = () => {

  const [boardData, setBoardData] = useState({
    title : '',
    writer : '',
    content : ''
  });
  
  console.log(boardData)

  const handleBoardData = e =>{
    setBoardData({
      ...boardData,
      [e.target.name] : e.target.value
    })
  }

  const nav = useNavigate();

  const regBoard = () => {
    //제목과 작성자 입력 여부 확인
    if(boardData.title === '' || boardData.writer === ''){
      alert('제목과 작성자는 필수 입력입니다.')
      return; // -> 리턴 데이터 없다 -> 실행 시 함수 종료 하겠다는 의미
    }
    axios.post('http://localhost:8080/boards', boardData)
    .then(response => {
      if(response.data > 0){
        alert('새로운 게시글 등록')
        nav('/')
      }
      else{
        alert('알 수 없는 ')
      }
    })
    .catch(e => console.log(e))
  }

  return (
    <div>
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>제목</td>
                <td><input type="text" name='title' value={boardData.title} onChange={handleBoardData}/></td>
              </tr>
              <tr>
                <td>작성자</td>
                <td><input type="text" name='writer' value={boardData.writer} onChange={handleBoardData}/></td>
              </tr>
              <tr>
                <td>내용</td>
                <td><input type="text" name='content' value={boardData.content} onChange={handleBoardData}/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button type='button' onClick={e => regBoard()}>글등록</button>
        </div>
      </div>
    </div>
  )
}

export default RegForm