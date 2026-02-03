import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);


    System.out.print("1~999까지의 정수 입력 : ");
    int num = sc.nextInt();

    int count = 0;
    int remainder = num;

    while (remainder > 0){

      int result = remainder % 10;
      if(result == 3 || result == 6 || result == 9){
        count++;
      }

      remainder /= 10;
    }

    switch (count){
      case 1:
        System.out.println("박수 1번");
        break;
      case 2:
        System.out.println("박수 2번");
        break;
      case 3:
        System.out.println("박수 3번");
        break;
      default:
        System.out.println("박수 0번");
        break;
    }

  }
}
