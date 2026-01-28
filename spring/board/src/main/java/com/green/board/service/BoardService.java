package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

  private BoardMapper boardMapper;

  @Autowired
  public BoardService(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }
  public List<BoardDTO> selectBoardList(){
    List<BoardDTO> list = boardMapper.selectBoardList();
    return list;
  }


}
