package com.green.restApi_test.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {
  private int bookNum;
  private String bookTitle;
  private String author;
  private String bookIntro;
  private int bookPrice;
}
