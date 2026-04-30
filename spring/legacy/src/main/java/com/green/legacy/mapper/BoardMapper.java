package com.green.legacy.mapper;

import com.green.legacy.dto.BoardDTO;
import com.green.legacy.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDTO> selectBoardList();

  void insertBoard(BoardDTO boardDTO);

  BoardDTO selectBoardDetail(BoardDTO boardDTO);

  void deleteBoard(int boardNum);

  void updateBoard(BoardDTO boardDTO);
}
