package com.green.rest_study;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//게시글과 관련된 요청에 대한 응답 클래스
//요청 종류는 대표적으로 CRUD라고 부르는 4개가 존재.
//C : Create => 데이터 생성
//R : Read => 데이터 조회(전체 조회, 특정 데이터만 조회)
//U : Update => 데이터 수정
//D : Delete => 데이터 삭제

@RestController
@RequestMapping("/boards")
public class BoardController {
  private List<BoardDTO> boardDTOList;

  public BoardController(){
    //게시글 목록이 저장될 List 생성
    boardDTOList = new ArrayList<>();

    //리스트에 게시글을 5개 지정
    boardDTOList.add(new BoardDTO(1, "첫 번째 글", "김자바", 5));
    boardDTOList.add(new BoardDTO(2, "두 번째 글", "김자바", 0));
    boardDTOList.add(new BoardDTO(3, "세 번째 글", "김자바", 10));
    boardDTOList.add(new BoardDTO(4, "네 번째 글", "김자바", 8));
    boardDTOList.add(new BoardDTO(5, "다섯 번째 글", "김자바", 7));

  }

  //게시글 목록을 조회하는 API
  //URL -> (GET)localhost:8080/boards
  @GetMapping("")
  public List<BoardDTO> getBoardList(){
    System.out.println("게시글 목록을 조회합니다.");
    return boardDTOList;
  }

  //게시글 하나를 조회하는 API
  //URL -> (GET)localhost:8080/boards/5
  //URL에 {}를 사용하여 변수처첨 활용할 수 있음
  //이 변수는 URL에 적용되었다는 의미에서 URL Parameter라고 부름
  //URL Parameter로 전달되는 데이터는 메서드의 매개변수에 @PathVariable 어노테이션을 사용하여 활용 가능
  //문법 : PathVariable("url 파라메터 이름") 해당 데이터를 받을 변수
  @GetMapping("/boards/{boardNum}") //{boardNum} => 변수
  public BoardDTO getBoardDetail(@PathVariable("boardNum")int num){
    System.out.println("게시글" + num + "번 조회합니다.");

    BoardDTO result = null;
    for(BoardDTO e : boardDTOList){
      if(e.getBoardNum() == num){
        result = e;
      }
    }
    return result;
  }

  //연습용 코드
  @GetMapping("/boards/{boardNum}/{boardObject}")
  public void test1(@PathVariable("boardNum")int num, @PathVariable("boardObject") String obj){
    System.out.println("boardNum : " + num + "boardObject : " + obj);
  }


  //게시글 등록하는 API
  //URL -> (POST)localhost:8080/boards
  //데이터 등록(POST), 데이터 수정(PUT)시 요청과 함께 전달되는 데이터는 @RequestBody 어노테이션으로 전달받음
  //@RequestBody 어노테이션 다음에 클래스 자료형을 매개변수로 선언하면 해당 클래스에 데이터를 받을 수 있음
  //단, 해당 클래스의 맴버변수명은 요청 시 전달되는 객체의 key값과 동일해야 함
  @PostMapping("")
  public void regBoard(@RequestBody BoardDTO boardDTO){
    System.out.println(boardDTO);
    boardDTOList.add(boardDTO);
  }

  //게시글 삭제하는 API
  //URL -> (DELETE)localhost:8080/boards
  //URL -> (DELETE)localhost:8080/boards/5
  @DeleteMapping("boards/{boardNum}")
  public List<BoardDTO> deleteBoard(@PathVariable("boardNum") int boardNum){
    System.out.println("삭제하려는 글 번호 : " + boardNum);
    for(int i = 0; i < boardDTOList.size(); i++){
      if(boardDTOList.get(i).getBoardNum() == boardNum){
        boardDTOList.remove(i);
      }
    }
    return boardDTOList;
  }

  //게시글 수정하는 API
  //URL -> (PUT)localhost:8080/boards
  //URL -> (PUT)localhost:8080/boards/3
  //게시글의 제목과 작성자를 변경
  @PutMapping("/{boardNum}")
  public void updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
    System.out.println(boardNum);
    System.out.println(boardDTO);

    for(BoardDTO b : boardDTOList){
      if(b.getBoardNum() == boardNum){
        b.setTitle(boardDTO.getTitl e());
        b.setWriter(boardDTO.getWriter());
      }
    }
  }



}
