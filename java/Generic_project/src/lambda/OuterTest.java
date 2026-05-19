package lambda;

// [내부 클래스 인스턴스 생성 방법 연습]

public class OuterTest {
  public static void main(String[] args) {

    // 1단계: 외부 클래스(Outer) 인스턴스를 먼저 생성
    // 멤버 내부 클래스는 외부 클래스 인스턴스 없이는 생성 불가
    Outer outer = new Outer();

    // 2단계: 외부 클래스 인스턴스를 통해 내부 클래스(Member) 인스턴스 생성
    // 문법: 외부클래스인스턴스.new 내부클래스()
    // 타입 표기: 외부클래스.내부클래스
    Outer.Member m = outer.new Member();

    // m.add() 호출 시 → Outer의 num 값이 10 증가
    // m.add();

  }
}
