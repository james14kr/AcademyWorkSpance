public class MemberTest {
  public static void main(String[] args) {

    Member member = new Member();

    member.setInfo("java", "1234", "kim", 20);

    member.showInfo();

    boolean login = member.isLogin("java", "1234");
//    boolean login = member.isLogin("java", "1111");

    if(login == true){
      System.out.println("로그인 가능");
    }else{
      System.out.println("로그인 불가능");
    }

  }
}
