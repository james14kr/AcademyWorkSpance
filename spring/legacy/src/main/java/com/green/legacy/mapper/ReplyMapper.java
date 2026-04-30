package com.green.legacy.mapper;

import com.green.legacy.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {

  //댓글 조회 기능
  List<ReplyDTO> selectReply(ReplyDTO replyDTO);

  void insertReply(ReplyDTO replyDTO);

  void deleteReply(int replyNum);

}
