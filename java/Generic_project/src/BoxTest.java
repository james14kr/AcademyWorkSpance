public class BoxTest {
  public static void main(String[] args) {
    //가능한 것
    //1. 박스에 오렌지, 사과 등 다른 자료형을 저장할 수 있다.

    //불편한 점
    //1. 박스는 오렌지, 사과만 저장할 수 있는게 아니다.
    //2. 데이터를 뺄 때 형변환 코드를 넣어줘야 함


    Box b1 = new Box();
    b1.set(new Orange());
    Object orange = b1.get();
    Orange orange1 = (Orange) orange;  // 형변환 필요
    System.out.println(orange1.say());

    Box b2 = new Box();
    b2.set(new Apple());
    Apple apple = (Apple)(b2.get());   // 형변환 필요
    System.out.println(apple.say());

  }
}
