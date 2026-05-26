package stream;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Stream1 {
  public static void main(String[] args) {

    //배열을 스트림으로 생성
    int[] arr ={1,2,3,4,5};
    int result1 = Arrays.stream(arr).filter(a -> a % 2 == 0).sum();

    //리스트를 스트림으로 생성
    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
    List<Integer> result2 = list.stream().filter(num -> num % 2 == 0).toList();


  }
}
