package com.green.board.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReplyDTO {
  private int replyNum;
  private String writer;
  private LocalDateTime regDate;
  private String content;
  private int boardNum; 
}
