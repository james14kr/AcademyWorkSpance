package com.green.board.mapper;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

  List<BoardDTO> selectBoardList(SearchDTO searchDTO);

  int insertBoard(BoardDTO boardDTO);

  BoardDTO selectDetailBoardList(int boardNum);

}
