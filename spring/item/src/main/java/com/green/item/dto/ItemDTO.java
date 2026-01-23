package com.green.item.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ItemDTO {

  private int itemNum;
  private String itemName;
  private int itemPrice;
  private String itemDescription;
  private LocalDateTime createDate;   // 또는 Date
}

