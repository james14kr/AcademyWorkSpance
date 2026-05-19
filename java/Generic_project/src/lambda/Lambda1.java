package lambda;

// [람다식 기본 문법 연습]
// 람다식: 함수형 인터페이스의 추상 메서드를 익명 클래스 없이 간결하게 구현하는 표현식
// 기본 형태: (매개변수) -> { 실행코드 }

public class Lambda1 {
  public static void main(String[] args) {

    // [케이스 1] 매개변수 1개, 반환값 없음
    // 매개변수가 1개일 때는 소괄호 생략 가능
    // 실행문이 1개일 때는 중괄호 생략 가능
    Test1 t1 = a -> System.out.println(a);
    t1.aaa(10); // 출력: 10

    // [케이스 2] 매개변수 2개, 반환값 없음
    // 매개변수가 2개 이상이면 소괄호 필수
    // 실행문이 2개 이상이면 중괄호 필수
    Test2 t2 = (a, b) -> {
      System.out.println(a); // 출력: hello
      System.out.println(b); // 출력: 10
    };
    t2.bbb("hello", 10);

    // [케이스 3] 매개변수 1개, 반환값 있음
    // 아래 주석: 중괄호 + return을 명시적으로 쓴 형태
//    Test3 t3 = a -> {
//      return a;
//    };

    // 실행문이 1개이고 그 값이 바로 반환값인 경우 → return 키워드와 중괄호 모두 생략 가능
    Test3 t3 = a -> a;

    t3.bbb(10); // 반환값: 10 (출력은 없음, 반환만 됨)

  }
}
