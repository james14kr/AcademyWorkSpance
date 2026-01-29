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

  public List<BoardDTO> getList(){
    List<BoardDTO> list = boardMapper.selectBoardList();
    return list;
  }

  public int regBoard(BoardDTO boardDTO){
    int insertedRowCnt = boardMapper.insertBoard(boardDTO);
    return insertedRowCnt;
  }

  public BoardDTO getDetailList(int boardNum){
    return boardMapper.selectDetailBoardList(boardNum);
  }


}
