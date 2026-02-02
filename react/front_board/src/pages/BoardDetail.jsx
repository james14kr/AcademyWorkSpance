import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReplyInfo from '../components/ReplyInfo';

const BoardDetail = () => {

  const nav = useNavigate();

  //url parameter 데이터 받기
  const params = useParams();

  //조회한 상세정보를 저장할 state 함수
  const [boardInfo, setBoardInfo] = useState({});

  //상세화면이 마운트 되면 상세 정보를 조회
  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${params.boardNum}`)
      .then(response => {
        setBoardInfo(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h2>게시글 상세 정보 페이지</h2>

      <table border={1}>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{boardInfo.createDate}</td>
            <td>작성자</td>
            <td>{boardInfo.writer}</td>
            <td>조회수</td>
            <td>{boardInfo.readCnt}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{boardInfo.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{boardInfo.content}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <button type="button" onClick={e => {nav(-1)}}>목록가기1</button>
        <button type="button" onClick={e => {nav('/')}}>목록가기2</button>
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </div>

      <div>
        <ReplyInfo boardNum = {params.boardNum}/>
      </div>

    </div>
  );
};

export default BoardDetail;
