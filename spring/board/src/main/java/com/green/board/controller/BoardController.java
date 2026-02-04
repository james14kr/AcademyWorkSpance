package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.invoke.CallSite;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
public class BoardController {

  private BoardService boardService;

  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  //게시글 목록 조회 api
//  @GetMapping("")
//  public List<BoardDTO> getBoardList(SearchDTO searchDTO){
//    System.out.println(searchDTO);
//    List<BoardDTO> list = boardService.getList(searchDTO);
//    return list;
//  }
  @GetMapping("")
    public ResponseEntity<?> getBoardList(SearchDTO searchDTO){
      try {
        System.out.println(searchDTO);
        log.info("게시글 목록 조회 기능 실행 중~");
        List<BoardDTO> list = boardService.getList(searchDTO);
        return ResponseEntity.status(HttpStatus.OK).body(list);
      }catch(Exception e){
        log.error("게시글 목록 조회 중 오류 발생!");
        e.printStackTrace(); //오류가 발생하는 이유 및 발생 위치를 알려줌
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("오류났음");
      }
    }

  @PostMapping("")
  public ResponseEntity<Integer> regBoard(@RequestBody BoardDTO boardDTO){

    try{
      System.out.println(boardDTO);
      int result = boardService.regBoard(boardDTO);
      return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }catch (Exception e){
       log.error("게시글 등록 중 오류 발생");
       e.printStackTrace(); //fillInStackTrace
       return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  // (GET) localhost:8080/boards/1
  @GetMapping("/{boardNum}")
  public BoardDTO getDetailBoardList(@PathVariable("boardNum") int boardNum){
    return boardService.getDetailList(boardNum);
  }

}
