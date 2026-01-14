public class MemberTest {
  public static void main(String[] args) {

    Member m1 = new Member();

    m1.setMember("황민서", "hwangms14rk", "*****", 23);

    m1.printInfo();

    System.out.println(" ");

    m1.setMember("황민서", "ghkdalstj", "*****", 24);

    m1.printInfo();
  }
}
