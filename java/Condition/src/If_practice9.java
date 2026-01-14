import java.util.Scanner;

public class If_practice9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2, num3;

    System.out.print("첫 번째 정수 입력 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 정수 입력 : ");
    num2 = sc.nextInt();

    System.out.print("세 번째 정수 입력 : ");
    num3 = sc.nextInt();

    if(num1 < num2 + num3 && num2 < num1 + num3 &&  num3  < num1 + num2){
      System.out.println("가능");
    }else{
      System.out.println("불가능");
    }


  }
}
