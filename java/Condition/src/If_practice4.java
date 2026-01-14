import java.util.Scanner;

public class If_practice4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num = sc.nextInt();

    if(num % 3 == 0){
      System.out.println("3의 배수입니다.");
    }

  }
}
