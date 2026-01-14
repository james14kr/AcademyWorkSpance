public class Operater2 {
  public static void main(String[] args) {
    int num1 = 5;
    num1++;
    System.out.println(num1);
    --num1;
    System.out.println(num1);

    int num2 = 5;
    int num3 = ++num2;

    int num4 = num3++;
    System.out.println(num4);
    System.out.println(num3);

    //복합 대입 연산자
    int a = 3;
    int b = 7;

    a = a+b;
    a += b;



  }
}
