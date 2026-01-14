import org.w3c.dom.NameList;

public class Member {

  String name;
  String id;
  String pw;

  public Member() {

  }

  public void setMember(String name, String id, String pw){
    this.name = name;
    this.id = id;
    this.pw = pw;
  }

  public String getName(){
    return name;
  }

  public void setName(String name){
    this.name = name;
  }

  public String getId(){
    return id;
  }

  public void setId(String id){
    this.id = id;
  }

  public String getPw(){
    return pw;
  }

  public void setPw(String pw){
    this.pw = pw;
  }

  public void displayInfo(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pw);
  }


}
