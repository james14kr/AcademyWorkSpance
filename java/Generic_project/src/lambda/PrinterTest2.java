package lambda;

// [익명 클래스 → 람다식 전환 예시]
// 함수형 인터페이스(추상 메서드 1개)는 익명 클래스 대신 람다로 간결하게 표현할 수 있다

public class PrinterTest2 {
  public static void main(String[] args) {

    // [기존 방식: 익명 클래스로 인터페이스 구현]
    // 코드가 길고 보일러플레이트(반복 코드)가 많다
//    Printable prn = new Printable() {
//      @Override
//      public void print() {
//        System.out.println(111);
//      }
//    };

    // [람다식으로 전환]
    // Printable의 추상 메서드 print()는 매개변수도 없고 반환값도 없으므로
    // () -> 실행코드 형태로 단 한 줄로 표현 가능
    Printable prn = () -> System.out.println(111);

    prn.print(); // 출력: 111
  }
}
