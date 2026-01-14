import java.util.Scanner;

public class If_practice11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a, b, num, count = 0;

    System.out.print("1~99 사이의 정수를 입력하세요 : ");
    num = sc.nextInt();

    a = num % 10;
    b = (num/10);

    if(a == 3 || a == 6 || a == 9){
      count++;
    }
    if(b == 3 || a == 6 || a == 9){
      count++;
    }


    switch (count){
      case 1 :
        System.out.println("박수짝");
        break;
      case 2 :
        System.out.println("박수짝짝");

    }


  }
}
