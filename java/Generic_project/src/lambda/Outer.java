package lambda;

// [내부 클래스(Inner Class) 기초]
// 클래스 안에 또 다른 클래스를 정의하는 것
// 내부 클래스는 외부 클래스의 private 멤버에도 직접 접근 가능하다

public class Outer {

  // 외부 클래스의 private 필드
  // 내부 클래스(Member)에서 직접 접근 가능
  private int num = 0;

  // [멤버 내부 클래스]
  // Outer 클래스 안에 정의된 일반 내부 클래스
  // 인스턴스를 생성하려면 먼저 외부 클래스(Outer)의 인스턴스가 필요하다
  class Member{

    // 외부 클래스의 private 필드 num에 직접 접근하여 값을 변경
    public void add(){
      num = num + 10; // Outer.this.num 과 동일 (생략 가능)
    }
  }

}
