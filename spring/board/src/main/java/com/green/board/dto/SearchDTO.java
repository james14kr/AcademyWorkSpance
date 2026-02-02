package com.green.board.dto;

//검색 내용을 쿼리문으로 전달할 객체

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchDTO {

  private String searchKeyword;
  private String searchValue;
}
