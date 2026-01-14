import java.util.Scanner;

public class If_Example {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("정수 입력 : ");
    int data = sc.nextInt();

    if(data % 2 == 0){
      System.out.println("짝수");
    }else{
      System.out.println("홀수");
    }

    if(data > 10){
      System.out.println("1");
    }else{
      System.out.println("2");
    }

    if(data > 0){
      System.out.println(1);
    }else if(data < 0) {
      System.out.println(2);
    }else{
      System.out.println(3);
    }

  }
}
