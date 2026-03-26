package com.example.security.service;

import com.example.security.dto.MemberDTO;
import com.example.security.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

  private final MemberMapper memberMapper;
  private final PasswordEncoder passwordEncoder;

  //회원가입
  public void join(MemberDTO memberDTO){
    String encodedPw = passwordEncoder.encode(memberDTO.getMemPw());

    memberDTO.setMemPw(encodedPw);

    memberMapper.join(memberDTO);
  }

  public MemberDTO selectLoginInfo(String memEmail){
    return memberMapper.selectLoginInfo(memEmail);
  }

}
