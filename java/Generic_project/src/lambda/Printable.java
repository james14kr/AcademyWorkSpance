package lambda;

// [함수형 인터페이스란?]
// 람다식은 '추상 메서드가 단 하나뿐인 인터페이스'에만 적용할 수 있다.
// 이런 인터페이스를 '함수형 인터페이스(Functional Interface)'라고 부른다.
// Java는 람다 활용성을 높이기 위해 java.util.function 패키지에
// 다양한 함수형 인터페이스를 미리 정의해두었다.

// [직접 정의한 함수형 인터페이스 예시]
// 아래 인터페이스들은 람다 문법 연습을 위해 직접 만든 간단한 함수형 인터페이스이다.

// Printable: 매개변수 없음, 반환값 없음 (void)
public interface Printable {
  void print();
}

// Test1: int 매개변수 1개, 반환값 없음 (void)
interface Test1{
  void aaa(int a);
}

// Test2: String, int 매개변수 2개, 반환값 없음 (void)
interface Test2{
  void bbb(String a, int b);
}

// Test3: int 매개변수 1개, int 반환값 있음
// → 람다에서 return 생략 표현식을 연습하기 위한 인터페이스
interface Test3{
  int bbb(int a);
}