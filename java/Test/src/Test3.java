import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.print("정수 1 ~ 999 입력 : ");
    int num = sc.nextInt();

    //몫
    int count = 0;
    int remainder = num;

    while (remainder > 0){

      remainder / 10;

    }

    switch (count){
      case 1 :
        System.out.println("박수 1번");
        break;
      case 2 :
        System.out.println("박수 2번");
        break;
      case 3 :
        System.out.println("박수 3번");
        break;
      default:
        System.out.println("박수 0번");
    }

  }
}
