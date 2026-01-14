import java.sql.SQLOutput;

public class Member2ServiceExample {
  public static void main(String[] args) {
    Member2Service member2Service = new Member2Service();
    boolean result = member2Service.login("hong", "12345");
    if(result){
      System.out.println("로그인되었습니다.");
      member2Service.logout("hong");
    }else{
      System.out.println("id 또는 password가 올바르지 않습니다.");
    }
  }
}
