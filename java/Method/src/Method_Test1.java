import java.util.Scanner;

public class Method_Test1 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    test1("안녕하세요");
    test2(23);
    test3("문자열");
    test4(10, 20);
    test5(2, 3, 4);
    test6(10, 20);
    test7("안녕", "하세요");

    System.out.print("정수 입력 : ");
    int num = sc.nextInt();
    test8(num);

    System.out.print("첫 번째 정수 입력 : ");
    int num1 = sc.nextInt();
    System.out.print("두 번째 정수 입력 : ");
    int num2 = sc.nextInt();
    test9(num1, num2);

    test10(num);
    test11(num1, num2);
    test12(num);
    test13(num1, num2);
    test14(num1, num2);
    test15("출력문", 5);
  }

  public static void test1(String hello){
    System.out.println(hello);
  }

  public static void test2(int num){
    System.out.println(num);
  }

  public static void test3(String str){
    System.out.println(str);
  }

  public static void test4(int a, int b){
    System.out.println(a + b);
  }

  public static void test5(int a, int b, int c){
    System.out.println(a * b * c);
  }

  public static void test6(int a, int b){
    if(a > b){
      System.out.println("몫" + a/b);
      System.out.println("나머지" + a%b);
    }else{
      System.out.println("몫" + b/a);
      System.out.println("나머지" + b%a);

    }
  }

  public static void test7(String str1, String str2){
    System.out.println(str1 + " " + str2);
  }

  public static void test8(int num){
    System.out.println(num);
  }

  public static void test9(int num1, int num2){
    System.out.println(num1 + num2);
  }

  public static void test10(int num){
    if(num % 2 == 0){
      System.out.println("짝수 입니다.");
    }else{
      System.out.println("홀수 입니다.");
    }
  }

  public static void test11(int num1, int num2){
    if(num1 % 2 == 0 && num2 % 2 == 0){
      System.out.println("두 수는 짝수입니다.");
    }else if(num1 % 2 == 0 || num2 % 2 == 0){
      System.out.println("한 수만 짝수입니다.");
    }else{
      System.out.println("두 수는 홀수입니다.");
    }
  }

  public static void test12(int num){
    for(int i = 0; i <= num; i++){
      System.out.print(i + " ");
    }
    System.out.println(" ");
  }

  public static void test13(int num1, int num2){
    int max;
    int min;
    if(num1 > num2){
      max = num1;
      min = num2;
    }else {
      max = num2;
      min = num1;
    }

    for(int i = min+1; i < max; i++){
      System.out.print(i + " ");
    }
    System.out.println(" ");

  }
  public static void test14(int num1, int num2){
    int max;
    int min;
    int count = 0;

    if(num1 > num2){
      max = num1;
      min = num2;
    }else {
      max = num2;
      min = num1;
    }

    for(int i = min+1; i < max; i++){
      if(i % 5 == 0){
        count++;
      }
    }
    System.out.println("5의 배수 개수 : " + count);

  }

  public static void test15(String str, int num){
    for (int i = 0; i < num; i++){
      System.out.println(str);
    }
  }

}
