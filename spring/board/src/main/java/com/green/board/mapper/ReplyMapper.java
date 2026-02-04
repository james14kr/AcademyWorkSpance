package com.green.board.mapper;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {

  //댓글 목록 조회 쿼리 실행 메서드
  List<ReplyDTO> selectReplyList(int boardNum);

  //댓글 등록 쿼리 실행 메서드
  void insertReply(ReplyDTO replyDTO); //BoardDTO boardDTO도 가능

  //댓글 삭제 쿼리 실행 매서드
  void deleteReply(int replyNum);

}
