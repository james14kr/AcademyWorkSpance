package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {

  private BoardService boardService;

  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  @GetMapping("")
  public List<BoardDTO> selectBoardList(){
    List<BoardDTO> list = boardService.selectBoardList();
    return list;
  }

}
