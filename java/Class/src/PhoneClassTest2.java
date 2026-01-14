public class PhoneClassTest2 {
  public static void main(String[] args) {

    PhoneClassTest p1 = new PhoneClassTest();
    p1.maker = "애플";
    p1.model = "아이폰 17 프로";
    p1.color = "블루";
    p1.price = 1200000;
    p1.number = "010-3100-6946";

    p1.printInfo();

    System.out.println(" ");

    p1.setMaker("삼성");
    p1.printInfo();

  }
}
