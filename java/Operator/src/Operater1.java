public class Operater1 {
  public static void main(String[] args) {
    //산술 연산자(+ - * / %)
    //% : mod 연산자 나눗셈의 나머지를 구하는 연산자
    int result1 = 10 % 4;
    System.out.println(result1);

    //비교 연산자
    // > < >= <= ==

    System.out.println(10 > 3);
    System.out.println(3 == 3);

    boolean result2 = 10 > 3;

    //논리연산자
    //&&, ||(버티컬 바), & |
    System.out.println(3 > 1 && 2 > 1);

    int num1 = 5;
    int num2 = 7;
    boolean result3 = num1 > 3 || num2 != 7;

    boolean result4 = num1 * 2 > 10 && !(num2 % 2 == 1);


  }
}
