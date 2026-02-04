package com.green.board.service;

import com.green.board.dto.ReplyDTO;
import com.green.board.mapper.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyService {
  private ReplyMapper replyMapper;

  /*@Autowired 생성자 하나일 때 생략 가능*/
  public ReplyService(ReplyMapper replyMapper){
    this.replyMapper = replyMapper;
  }

  //댓글 목록 조회 기능
  public List<ReplyDTO> getReplyList(int boardNum){
    return replyMapper.selectReplyList(boardNum);
  }

  //댓글 등록 기능
  public void regReply(ReplyDTO replyDTO){
    replyMapper.insertReply(replyDTO);
  }

  //댓글 삭제 기능
  public void deleteReply(int replyNum){
    replyMapper.deleteReply(replyNum);
  }

}
