package com.green.legacy.service;

import com.green.legacy.dto.BoardDTO;
import com.green.legacy.dto.ReplyDTO;
import com.green.legacy.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

  private final BoardMapper boardMapper;

  public List<BoardDTO> selectBoardList(BoardDTO boardDTO){
    return boardMapper.selectBoardList(boardDTO);
  }

  public void insertBoard(BoardDTO boardDTO){
    boardMapper.insertBoard(boardDTO);
  }

  public BoardDTO selectBoardDetail(BoardDTO boardDTO){
    return boardMapper.selectBoardDetail(boardDTO);
  }

  public void deleteBoard(int boardNum){
    boardMapper.deleteBoard(boardNum);
  }

  public void updateBoard(BoardDTO boardDTO){
    boardMapper.updateBoard(boardDTO);
  }

  public int selectBoardCnt(){
    return boardMapper.selectBoardCnt();
  }

}
