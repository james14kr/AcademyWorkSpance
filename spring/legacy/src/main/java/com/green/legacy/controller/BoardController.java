package com.green.legacy.controller;

import com.green.legacy.dto.BoardDTO;
import com.green.legacy.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller //객체 생성, 해당 클래스는 컨트롤러 역할임을 스프링한테 인지(비동기 미지원)
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

  private final BoardService boardService;

  //게시글 목록 페이지("/boards/getList")
  //조회, 등록, 삭제, 수정이든 전부 @RequestMapping 어노테이션 사용
  //컨트롤러에서 요청을 처리하는 메서드의 리턴타입은 무조건 문자열
  //레거시 방식에서 리턴되는 정보는 보여질 html파일명을 의미함
  @RequestMapping("/getList")
  public String getList(Model model){
    //필요한 데이터 조회
    String name = "hong";
    int age = 20;

    //조회한 데이터를 실음
    model.addAttribute("data", name);
    model.addAttribute("ageData", age);
    model.addAttribute("boardList", boardService.selectBoardList());
    return "board_list";
  }

  //글쓰기 페이지로 이동
  @RequestMapping("/go-write")
  public String goWrite(){
    return "reg_board";
  }

  //글쓰기 기능 실행
  //데이터 받는 1번째 방식
  //@ModelAttribute 클래스명 객체명 -> input 태그의 name 속성과 동일한 맴머변수를 가진 dto 클래스가 데이터 받음
  @RequestMapping("/write")
  public String write(@ModelAttribute BoardDTO boardDTO){
    System.out.println(boardDTO);
    return "";
  }

  //데이터 받는 2번째 방식
  //@RequestParam 어노테이션을 이용하면 데이터를 하나씩 받을 수 있음
  @RequestMapping("/write2")
  public String write2(@RequestParam(name = "name") String name, @RequestParam(name = "age") String age){
    System.out.println("name: " + name);
    System.out.println("age: " + age);
    return "";
  }


}
