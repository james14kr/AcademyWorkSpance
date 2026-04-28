package com.green.legacy.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardDTO {
  private int boardNum;
  private String title;
  private String content;
  private String writer;
  private LocalDateTime regDate;
}
