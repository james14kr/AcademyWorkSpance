public class ManTest {
  public static void main(String[] args) {

    Man m1 = new Man();

    m1.name = "황";
    m1.age = 23;
    m1.address = "울산";
    System.out.println(m1.getName());
    System.out.println(m1.getAge());
    System.out.println(m1.getAddress());

    Man m2 = new Man();
    m2.setName("김");
    m2.setAge(24);
    m2.setAddress("부산");

    System.out.println(m2.getName());
    System.out.println(m2.getAge());
    System.out.println(m2.getAddress());

    Man m3 = new Man();
    m3.reMan("박", 25, "서울");
    m3.printInfo();

  }
}
