package com.green.legacy.controller;

import com.green.legacy.dto.BoardDTO;
import com.green.legacy.dto.ReplyDTO;
import com.green.legacy.service.BoardService;
import com.green.legacy.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller //객체 생성, 해당 클래스는 컨트롤러 역할임을 스프링한테 인지(비동기 미지원)
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

  private final BoardService boardService;
  private final ReplyService replyService;

  //게시글 목록 페이지("/boards/getList")
  //조회, 등록, 삭제, 수정이든 전부 @RequestMapping 어노테이션 사용
  //컨트롤러에서 요청을 처리하는 메서드의 리턴타입은 무조건 문자열
  //레거시 방식에서 리턴되는 정보는 보여질 html파일명을 의미함
  @RequestMapping("/getList")
  //컨트롤러의 메서드 매개변수에 dto 클래스를 전달받으면 객체를 알아서 생성
  public String getList(BoardDTO boardDTO, Model model){

    //전체 데이터 수 조회
    int totalBoardCnt = boardService.selectBoardCnt();
    boardDTO.setTotalDataCnt(totalBoardCnt);

    //페이징 정보 세팅
    boardDTO.setPageInfo();

    //boardDTO 정보 출력
    System.out.println(boardDTO);

   //조회한 게시글 목록을 html로 전달
    List<BoardDTO> boardList= boardService.selectBoardList(boardDTO);
    model.addAttribute("boardList", boardList);
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
    boardService.insertBoard(boardDTO);

    //return에는 기본적으로 html파일을 작성
    //추가적으로 html파일명이 아니라, controller의 다른 메서드를 호출 가능
    //"redirect: 요청 url"
    return "reg_result"; //게시글 등록 성공 여부에 따라 alert를 띄울 목적의 html
  }

  //데이터 받는 2번째 방식
  //@RequestParam 어노테이션을 이용하면 데이터를 하나씩 받을 수 있음
  @RequestMapping("/write2")
  public String write2(@RequestParam(name = "name") String name, @RequestParam(name = "age") String age){
    System.out.println("name: " + name);
    System.out.println("age: " + age);
    return "";
  }

  @RequestMapping("/detail")
  public String detail(Model model, @ModelAttribute BoardDTO boardDTO){
    model.addAttribute("boardDetail", boardService.selectBoardDetail(boardDTO));

    ReplyDTO replyDTO = new ReplyDTO();
    replyDTO.setBoardNum(boardDTO.getBoardNum());

    model.addAttribute("replyList", replyService.selectReply(replyDTO));
    return "list_detail";

  }

  @RequestMapping("/delete")
  public String delete(@RequestParam(name = "boardNum") int boardNum){
    boardService.deleteBoard(boardNum);
    return "delete_result";
  }

  //글 수정
  @RequestMapping("/update-form/{boardNum}")
  public String goUpdate(@PathVariable("boardNum") int boardNum, Model model){
    System.out.println(boardNum);

    BoardDTO boardDTO = new BoardDTO();
    boardDTO.setBoardNum(boardNum);

    //게시글 상세 조회
    BoardDTO result = boardService.selectBoardDetail(boardDTO);
    model.addAttribute("board", result);

    //상세 정보를 html에 전달

    return "update-form";
  }

  @RequestMapping("/update")
  public String update(@ModelAttribute BoardDTO boardDTO){
    boardService.updateBoard(boardDTO);
    return "redirect:/boards/detail?boardNum=" + boardDTO.getBoardNum();
  }


}
