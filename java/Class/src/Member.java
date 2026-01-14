public class Member {
  String name;
  String id;
  String password;
  int age;

  public void setMember(String n, String i, String pw, int a) {
    name = n;
    id = i;
    password = pw;
    age = a;
  }

  public void printInfo(){
    System.out.println("NAME : " + name);
    System.out.println("ID : " + id);
    System.out.println("PASSWORD : " + password);
    System.out.println("AGE : " + age);
  }


}
