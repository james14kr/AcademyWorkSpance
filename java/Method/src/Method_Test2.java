import java.util.Arrays;
import java.util.Scanner;

public class Method_Test2 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int sum = test1(10, 20);
    System.out.println(sum);

    System.out.print("정수 입력 : ");
    int num1 = sc.nextInt();
    System.out.print("정수 입력 : ");
    int num2 = sc.nextInt();
    int mul = test2(num1, num2);
    System.out.println("두 수의 곱 : " + mul);

    int max = test3(num1, num2);
    System.out.println("더 큰 수 : " + max);

    String result = test4("안녕", "하세요");
    System.out.println(result);

    String score = test5(70);
    System.out.println(score);

    String str = test6(5);
    System.out.println(str);

    double square = test7(1.23);
    System.out.println(square);

    double avg = test8(60, 75, 82);
    System.out.println(avg);

    int sum2 = test9(10);
    System.out.println(sum2);

    boolean bool = test10("dddd");
    System.out.println(bool);

  }

  //두 정수를 매개변수로 받아, 두 정수의 합을 리턴하는 메소드를 선언하고 호출하여 결과를 확인하세요.
  public static int test1(int a, int b){
    return a+b;
  }

  //scanner로 입력받은 두 정수를 매개변수로 받아, 두 정수의 곱을 리턴하는 메소드를 선언하고 호출하여 결과를 호학인해보세요.
  public static int test2(int num1, int num2){
    return num1 * num2;
  }

  //두 정수를 매개변수로 받아, 두 정수 중 큰 숫자를 리턴하는 메소드를 선언하고 사용해보세요.
  public static int test3(int num1, int num2){
    if(num1 > num2){
      return num1;
    }else{
      return num2;
    }
  }

  //두 문자열을 매개변수로 받아, 두 문자열의 나열결과를 리턴하는 메소드를 선언하고 사용해보세요.
  public static String test4(String str1, String str2){
    return str1 + str2;
  }

  //임의의 정수를 매개변수로 받아, 만약 매개변수로 받은 정수가 90 이상이면 ‘A’, 70 이상이면 ‘B’, 그 외의 수가 들어오면 ‘C’를 리턴하는 메소드를 선언하고 사용해보세요
  public static String test5(int score){
    if(score >= 90){
      return "A";
    }else if(score >= 70){
      return "B";
    }else{
      return "C";
    }
  }


  //매개변수로 정수를 입력받아, 입력받은 정수를 문자열로 리턴하는 메소드를 선언하고 사용해보세요
  public static String test6(int num){
    //    return num+"";
    return String.valueOf(num);
  }

  //실수를 매개변수로 받아, 그 수의 제곱 값을 리턴하는 메소드를 만들고 사용해보세요.
  public static double test7(double num){
    return num* num;
  }

  //세 정수를 매개변수로 받아, 세 정수의 평균을 리턴하는 메소드를 선언하고 사용해보세요.
  public static double test8(int num1, int num2, int num3){
    return (double)(num1 + num2 + num3) / 3;
  }

  //한 정수를 매개변수로 받아, 1부터 매개변수로 받은 수까지 중 홀수의 합을 리턴하는 메소드를 선언하고 사용해보세요.
  public static int test9(int num){
    int sum = 0;
    for (int i = 1; i <= num; i++){
      if(i % 2 != 0){
        sum += i;
      }
    }
    return sum;
  }

  //매개변수로 문자열 데이터 하나를 받아, 해당 문자열의 길이가 짝수 일 때는 true를 리턴하고, 홀수 일 때는 false를 리턴하는 메서드를 선언하고 사용해보세요.
  public static boolean test10(String str){
    return str.length() % 2 == 0;
  }

}
