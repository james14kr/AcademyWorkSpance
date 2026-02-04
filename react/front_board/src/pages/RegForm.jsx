import axios from 'axios';              
import React, { useState } from 'react';   
import { useNavigate } from 'react-router-dom'; 

const RegForm = () => {

  // 게시글 입력 데이터를 저장할 state
  const [boardData, setBoardData] = useState({
    title : '',   
    writer : '',  
    content : '' 
  });
  
  // 입력값 확인용 
  console.log(boardData);

  // input 값 변경 시 실행되는 함수
  const handleBoardData = e =>{
    setBoardData({
      ...boardData,               // 기존 데이터 유지
      [e.target.name] : e.target.value // name 속성에 따라 값 변경
    });
  };

  // 페이지 이동을 위한 navigate 함수
  const nav = useNavigate();

  // 게시글 등록 함수
  const regBoard = () => {

    // 제목 또는 작성자가 비어있으면 등록 중단
    if(boardData.title === '' || boardData.writer === ''){
      alert('제목과 작성자는 필수 입력입니다.');
      return; // 함수 종료
    }

    // 게시글 등록 요청
    axios.post('http://localhost:8080/boards', boardData)
      .then(response => {

        // 등록 성공 (서버에서 1 이상 반환 시)
        if(response.status == 200){
          alert('새로운 게시글 등록');
          nav('/'); // 메인 페이지로 이동
        }
        else{
          alert('알 수 없는 오류가 발생했습니다.');
        }
      })
      .catch(e => console.log(e)); // 에러 발생 시 콘솔 출력
  };

  return (
    <div>
      <div>
        <div>
          <table>
            <tbody>
              {/* 제목 입력 */}
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    name='title'
                    value={boardData.title}
                    onChange={handleBoardData}
                  />
                </td>
              </tr>

              {/* 작성자 입력 */}
              <tr>
                <td>작성자</td>
                <td>
                  <input
                    type="text"
                    name='writer'
                    value={boardData.writer}
                    onChange={handleBoardData}
                  />
                </td>
              </tr>

              {/* 내용 입력 */}
              <tr>
                <td>내용</td>
                <td>
                  <input
                    type="text"
                    name='content'
                    value={boardData.content}
                    onChange={handleBoardData}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 글 등록 버튼 */}
        <div>
          <button type='button' onClick={regBoard}>
            글등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
