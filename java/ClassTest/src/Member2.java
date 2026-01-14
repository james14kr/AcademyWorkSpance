public class Member2 {

  String name;
  String id;
  String password;
  int age;

  public Member2(String name, String id){
    this.name = name;
    this.id = id;
  }

  public void resetMember(String name, String id, String password, int age){
    this.name = name;
    this.id = id;
    this.password = password;
    this.age = age;
  }

  public void setName(String name){
    this.name = name;
  }

  public String getName(){
    return name;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getId() {
    return id;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return password;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getAge() {
    return age;
  }
}
