package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.invoke.CallSite;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {

  private BoardService boardService;

  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  @GetMapping("")
  public List<BoardDTO> getBoardList(SearchDTO searchDTO){
    System.out.println(searchDTO);
    List<BoardDTO> list = boardService.getList(searchDTO);
    return list;
  }

  @PostMapping("")
  public int regBoard(@RequestBody BoardDTO boardDTO){
    System.out.println(boardDTO);
    int result = boardService.regBoard(boardDTO);
    return result;
  }

  // (GET) localhost:8080/boards/1
  @GetMapping("/{boardNum}")
  public BoardDTO getDetailBoardList(@PathVariable("boardNum") int boardNum){
    return boardService.getDetailList(boardNum);
  }

}
