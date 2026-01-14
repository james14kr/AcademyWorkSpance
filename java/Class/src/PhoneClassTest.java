import java.sql.SQLOutput;

public class PhoneClassTest {
  String maker;
  String model;
  String color;
  int price;
  String number;

  public void setMaker(String m){
    maker = m;
  }
  public void setModel(String mo){
    model = mo;
  }
  public void setColor(String co){
    color = co;
  }
  public void setPrice(int p){
    price = p;
  }
  public void setNumber(String n){
    number = n;
  }

  public void printInfo(){
    System.out.println("제조사" + "=" + maker);
    System.out.println("모델" + "="+ model);
    System.out.println("가격" + "=" + price);
    System.out.println("전화번호" + "=" + number);
  }

}
