package com.green.legacy.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderDTO {

  private String type;
  private int count;
  private List<String> option;
  private String request;
}
