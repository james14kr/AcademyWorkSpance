package com.green.restApi_test.controller;

import com.green.restApi_test.dto.BookDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

  private List<BookDTO> bookDTOList;

  public BookController(){
    bookDTOList = new ArrayList<>();

    bookDTOList.add(new BookDTO(1,"책1", "작가1", "인트로1", 1000));
    bookDTOList.add(new BookDTO(2,"책2", "작가2", "인트로2", 2000));
    bookDTOList.add(new BookDTO(3,"책3", "작가3", "인트로3", 3000));
    bookDTOList.add(new BookDTO(4,"책4", "작가4", "인트로4", 4000));
    bookDTOList.add(new BookDTO(5,"책5", "작가5", "인트로5", 5000));

  }

  @GetMapping("")
  public List<BookDTO> getBookDTOList(){
    System.out.println("모든 도서 정보 출력");
    return bookDTOList;
  }

  @GetMapping("/{bookNum}")
  public BookDTO getBookDetail(@PathVariable("bookNum") int bookNum){
    System.out.println("게시글" + bookNum + "번 조회합니다.");
    BookDTO result = null;
    for(BookDTO e : bookDTOList){
      if(e.getBookNum() == bookNum){
        result = e;
      }
    }
    return result;
  }

  @PostMapping("")
  public void regBook(@RequestBody BookDTO bookDTO){
    System.out.println(bookDTO);
    bookDTOList.add(bookDTO);
  }

  @DeleteMapping("/{bookNum}")
  public List<BookDTO> deleteBook(@PathVariable("bookNum") int bookNum){
    for(int i = 0; i < bookDTOList.size(); i++){
      if(bookDTOList.get(i).getBookNum() == bookNum){
        bookDTOList.remove(i);
      }
    }
    return bookDTOList;
  }

  @PutMapping("/{bookNum}")
  public void updateBook(@PathVariable("bookNum")int bookNum, @RequestBody BookDTO bookDTO){
    for(int i = 0; i < bookDTOList.size(); i++){
      if(bookDTOList.get(i).getBookNum() == bookNum){
        bookDTOList.get(i).setBookTitle(bookDTO.getBookTitle());
        bookDTOList.get(i).setAuthor(bookDTO.getAuthor());
        bookDTOList.get(i).setBookPrice(bookDTO.getBookPrice());
      }
    }
  }


}
