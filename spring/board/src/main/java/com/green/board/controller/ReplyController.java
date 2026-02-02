package com.green.board.controller;

import com.green.board.dto.ReplyDTO;
import com.green.board.service.ReplyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/replies")
public class ReplyController {
  private ReplyService replyService;

  public ReplyController(ReplyService replyService){
    this.replyService = replyService;
  }

  //댓글 목록 조회 api
  //url : (GET) localhost:8080/replies
  @GetMapping("/{boardNum}")
  public List<ReplyDTO> getReplyList(@PathVariable("boardNum") int boardNum){
    //조회되는 데이터가 없어도 list는 null이 아니라, size() 메서드 결과 0이 나옴
    List<ReplyDTO> list = replyService.getReplyList(boardNum);
//    System.out.println(list);
//    System.out.println(list.size());
    return list;
  }

  //일반적인 클래스를 리턴 받으면 null
  //list로 리턴 받으면 0
}
