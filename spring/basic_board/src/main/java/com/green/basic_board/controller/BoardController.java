package com.green.basic_board.controller;

import com.green.basic_board.dto.BoardDTO;
import com.green.basic_board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {

  private BoardService boardService;

  @Autowired
  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  @GetMapping("/test4")
  public List<BoardDTO> test4(){
    BoardDTO dto = new BoardDTO();
    dto.setBoardNum(1);
    dto.setReadCnt(5);
    List<BoardDTO> result = boardService.test4(dto);
    return result;
  }

  @PostMapping("/test5")
  public void regBoard(@RequestBody BoardDTO boardDTO){
    boardService.regBoard(boardDTO);
  }

  @DeleteMapping("/test6/{boardNum}")
  public int delBoard(@PathVariable("boardNum") int boardNum){
    int result = boardService.delBoard(boardNum);
    return result;
  }

  @PutMapping("test7/{boardNum}")
  public int updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
    int result = boardService.updateBoard(boardDTO);
    return result;
  }

}
