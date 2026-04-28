package com.green.legacy.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReplyDTO {
  private int replyNum;
  private String replyContent;
  private String replyWriter;
  private LocalDateTime regDate;
}
