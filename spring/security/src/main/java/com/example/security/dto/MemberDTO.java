package com.example.security.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberDTO {

  private  String memEmail;
  private String memPw;
  private String memName;
  private String memRole;

}
