public class Man {

  String name;
  int age;
  String address;

  //모든 맴버변수의 값을 초기화하는 매서드
  //this.name -> 이 클래스에 정의된 name
  //this 키워드는 맴버변수 및 매서드에 사용 가능
  public void reMan(String n, int a, String ad){
    this.name = n;
    this.age = a;
    this.address = ad;
  }

  //setter : 클래스가 가진 각각의 맴버변수 값을 변경하는 메서드
  // 메서드명은 반드시 'set맴버명수명'으로 지정해줘야 함
  public void setName(String name){
    this.name = name;
  }
  public void setAge(int age){
    this.age = age;
  }
  public void setAddress(String address){
    this.address = address;
  }

  //setter : 클래스 각각의 맴버변수 값을 리턴하는 메서드
  // 메서드명은 반드시 'get맴버명수명'으로 지정해줘야 함
  public String getName(){
    return name;
  }
  public int getAge(){
    return age;
  }
  public String getAddress(){
    return address;
  }

  public void printInfo(){
    System.out.println("이름 : " + getName());
    System.out.println("나이 : " + getAge());
    System.out.println("주소 : " + getAddress());
  }



}
