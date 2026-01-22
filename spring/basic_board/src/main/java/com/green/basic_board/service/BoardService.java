package com.green.basic_board.service;

import com.green.basic_board.dto.BoardDTO;
import com.green.basic_board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//service 클래스 : 프로젝트에서 핵심 가능을 구현한 클래스
@Service
public class BoardService {
  private BoardMapper boardMapper;

  //생성자 의존성 주임
  @Autowired
  public BoardService(BoardMapper boardMapper) {
    this.boardMapper = boardMapper;
  }

  public List<BoardDTO> test4(BoardDTO boardDTO){
    return boardMapper.test4(boardDTO);
  }

}
