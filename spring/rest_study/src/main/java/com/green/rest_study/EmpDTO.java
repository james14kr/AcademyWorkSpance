package com.green.rest_study;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class EmpDTO {
  private int empNum;
  private String empName;
  private String depName;
  private int salary;
  private String rank;
}
