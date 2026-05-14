package com.green.jpa_study.service;

import com.green.jpa_study.dto.MemberRequest;
import com.green.jpa_study.dto.MemberResponse;
import com.green.jpa_study.entity.Member;
import com.green.jpa_study.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

  private final MemberRepository memberRepository;

  //회원 목록 조회
  public List<MemberResponse> findAll(){
    //return타입: List<Member>
//    List<Member> list = memberRepository.findAll();

    //List<Member> 타입을 List<MemberResponse>로 변환
//    List<MemberResponse> result = new ArrayList<>();
//    for(Member m : list){
//      MemberResponse mr = MemberResponse.convertToMemberResponse(m);
//      result.add(mr);
//    }
//    return result;

    return memberRepository.findAll().stream()
            .map(e -> MemberResponse.convertToMemberResponse(e))
            .toList();
  }

  //게시글 삽입
  public MemberResponse create(MemberRequest memberRequest){

    Member m = new Member();
    m.setMemEmail(memberRequest.getMemEmail());
    m.setMemName(memberRequest.getMemName());
    m.setMemAge(memberRequest.getMemAge());

    Member result = memberRepository.save(m);

    return MemberResponse.convertToMemberResponse(result);
  }

  //게시글 상세 보기
  public MemberResponse findOne(Long memNum){
    Member m = memberRepository.findById(memNum).get();
    return MemberResponse.convertToMemberResponse(m);
  }

  //게시글 수정
  @Transactional
  public MemberResponse update(Long memNum, MemberRequest memberRequest){
    //수정하려는 회원 정보 조회
    Member m = memberRepository.findById(memNum).get();

    //Entity의 값을 변경하면 테이블의 값을 변경하는것과 같기 때문에 update 쿼리 실행되어버림
    m.setMemName(memberRequest.getMemName());
    m.setMemAge(memberRequest.getMemAge());

    return MemberResponse.convertToMemberResponse(m);
  }

  //게시글 삭제


}
