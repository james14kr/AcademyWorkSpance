
package com.green.item.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Getter
@Setter
public class ItemDTO {
  private int itemNum;
  private String itemName;
  private int itemPrice;
  private LocalDateTime regDate;
  private String itemIntro;
}