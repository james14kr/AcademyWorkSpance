package com.green.board.mapper;

import com.green.board.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {

  //댓글 목록 조회 쿼리 실행 메서드
  List<ReplyDTO> selectReplyList(int boardNum);

}
