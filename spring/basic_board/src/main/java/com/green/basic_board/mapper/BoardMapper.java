package com.green.basic_board.mapper;

import com.green.basic_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//인터페이스 안에는 추상메서드만 올 수 있음
@Mapper //객체생서 + xml 파일에서 만든 쿼리문을 실행시키는 interface라는 것을 지정
public interface BoardMapper {
  //메서드명은 반드시 xml 파일에서 정의한 쿼리의 id로
  //메서드의 리턴타입 : 쿼리 실행 결과 전체 데이터를 담을 수 있는 자료형
  //select : 조회되는 데이터에 따라 리턴 타입이 달라짐
  //insert, delete, update : void or int
  //리턴이 int라는 것의 의미는 쿼리 실행결과 영향 받는 행의 갯수
  //메서드의 매개변수 : 쿼리 실행 시 채워줘야 하는 데이터
  List<BoardDTO> test4(BoardDTO boardDTO);

  void insertBoard(BoardDTO boardDTO);

  int deleteBoard(int boardNum);

  int updateBoard(BoardDTO boardDTO);

}
