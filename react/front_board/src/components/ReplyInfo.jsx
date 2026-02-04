import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardDetail from '../pages/BoardDetail'
import BoardList from '../pages/BoardList'

const ReplyInfo = ({boardNum}) => {

  //댓글 목록 조회 데이터를 저장할 state변수
  const[replyList, setReplyList] = useState([])

  //댓글 입력 데이터를 저장할 state
  const[replyData, setReplyData] = useState({
    writer : '',
    content : '',
    'boardNum': boardNum
  });

  //값 입력시 실행 함수
  const handelReplyData = e => {
    setReplyData({
      ...replyData,
      [e.target.name] : e.target.value
    });
  }

  //마운트 시 댓글 목록 조회
  useEffect(() => {
    getReplyList();
  }, [])

  //댓글 목록 조회 함수
  const getReplyList =() => {
    axios.get(`http://localhost:8080/replies/${boardNum}`)
    .then(response => {
      console.log(response.data);
      setReplyList(response.data);
    })
    .catch(e => console.log(e))
  }

  const regReply = () => {
    console.log(replyData);
    //작성자 혹은 댓글 내용이 입력되지 않았으면
    if(replyData.writer === '' || replyData.content === ''){
      return;
    }
    axios.post('http://localhost:8080/replies', {
      ...replyData,
      boardNum : boardNum
    })
    .then(response => {
      setReplyData({
        ...replyData,
        writer : '',
        content : '',
        boardNum : boardNum
      });
      getReplyList();
    })
    .catch(e => console.log(e));
  }

  //댓글 삭제 함수
  const deleteReply = (replyNum) =>{
    const result = confirm('삭제하겠습니까?')
    if(result){
      axios.delete(`http://localhost:8080/replies/${replyNum}`)
      .then(response => {
        getReplyList();
      })
      .catch(e => console.log(e))
    }
  }

  return (
    <div style={{marginTop:'20px'}}>
      <div style={{display : 'flex', gap:'10px'}}>
        <input style={{width :'20%'}} type="text"  name='writer' value ={replyData.writer} onChange ={e =>handelReplyData(e)} placeholder='작성자'/>
        <input style={{width : '70%'}} type="text" name='content' value ={replyData.content} onChange ={e =>handelReplyData(e)} placeholder='댓글내용 입력'/>
        <button style={{width : '10%'}} type='button' onClick={e => regReply(e)}>댓글등록</button>
      </div>
      <div style={{marginTop : '16px'}}>
        {
          replyList.map((reply, i) => {
            return(
              <div key={i}>
                <div style={{display : 'flex', alignItems : 'center', gap : '8px'}}>
                  <img style={{border : '1px solid lightgray',
                    width : '50px',
                    height : '50px',
                    borderRadius : '50%'
                  }} src="/face-03.jpg" />
                  <div>
                    <p>{reply.writer}</p>
                    <p style={{color : 'gray'}}>{reply.regDate}</p>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent : 'space-between', marginTop : '5px'}}>
                  <p>{reply.content}</p>
                  <button type='button' onClick={e => {deleteReply(reply.replyNum)}}>삭제</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ReplyInfo