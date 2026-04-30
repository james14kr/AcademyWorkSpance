package com.green.legacy.controller;

import com.green.legacy.dto.ReplyDTO;
import com.green.legacy.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("replies")
@RequiredArgsConstructor
public class ReplyController {

  private final ReplyService replyService;

  @RequestMapping("/insert")
  public String insertReply(@ModelAttribute ReplyDTO replyDTO){
    replyService.insertReply(replyDTO);
    return "redirect:/boards/detail?boardNum=" + replyDTO.getBoardNum();
  }

  @RequestMapping("/delete")
  public String deleteReply(@RequestParam(name = "replyNum") int replyNum, @RequestParam(name = "boardNum") int boardNum){
    replyService.deleteReply(replyNum);
    return "redirect:/boards/detail?boardNum=" + boardNum;
  }

}
