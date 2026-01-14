import java.util.Scanner;

public class If_practice3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a = sc.nextInt();
    int b = sc.nextInt();

    if(a > b){
      System.out.println("a가 큽니다.");
    } else if (a < b) {
      System.out.println("b가 큽니다.");
    }else{
      System.out.println("같습니다.");
    }

  }
}
