package com.green.rest_study;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ItemDTO {

  private int productNum;
  private String productName;
  private int price;
  private String manufacturer;

}
