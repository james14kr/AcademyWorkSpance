public class Member {

  String id;
  String pw;
  String name;
  int age;

  public void setInfo(String id, String pw, String name, int age){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
  }

  public void showInfo(){
    System.out.println("ID : " + id);
    System.out.println("PW : " + pw);
    System.out.println("NAME : " + name);
    System.out.println("AGE : " + age);
  }

  public boolean isLogin(String id, String pw){

    if(id.equals("java") && pw.equals("1234")){
      return true;
    }else {
      return false;
    }
  }

}
