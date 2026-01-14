public class Member2Service {

  public boolean login(String id, String password){
    boolean result = true;
    if(id.equals("hong") && password.equals("12345")){
      result = true;
    }
    return result;
  }

  public void logout(String id){
    if(id.equals("hong")){
      System.out.println("로그아웃 되었습니다.");
    }
  }

}
