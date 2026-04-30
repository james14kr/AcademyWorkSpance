package com.green.legacy.service;

import com.green.legacy.dto.ReplyDTO;
import com.green.legacy.mapper.ReplyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReplyService {

  private final ReplyMapper replyMapper;

  public List<ReplyDTO> selectReply(ReplyDTO replyDTO){
    return replyMapper.selectReply(replyDTO);
  }

  public void insertReply(ReplyDTO replyDTO){
    replyMapper.insertReply(replyDTO);
  }

  public void deleteReply(int replyNum){
    replyMapper.deleteReply(replyNum);
  }

}
