public class RectangleExample {

  public static void main(String[] args) {
    Rectangle r = new Rectangle();
    Rectangle s = new Rectangle(1, 2, 3, 4);

    r.show();
    s.show();
    System.out.println("s.square메서드 값 : " + s.square());

    r.setValue(-2, 2, -1, 4);
    r.show();
    System.out.println("r.square메서드 값 : " + r.square());
    if(r.equals(s)){
      System.out.println("두 사격형은 같습니다.");
    }

  }



}
