public class DataType3 {
  public static void main(String[] args) {
    //형변환
    //자바는 자료형이 다른 데이터를 저장할 수 없다.
    int num1 = 10;

    //1. num1을 실수로 변환 -> 10.0 자동 형 변환 promotion
    //2. 실수를 바뀐 데이터를 num2에 저장

    double num2 = num1;
    System.out.println(num2);

    //개발자가 강제적(직접)으로 자료형을 변경할 수 있음
    //이것을 '강제 형 변환(casting)'이라고 한다.
    double num3 = 5.5;
    int num4 = (int) num3;
    System.out.println(num4);

  }
}
