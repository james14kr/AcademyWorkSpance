import java.util.Scanner;

public class If_practice7 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int first_num = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int second_num = sc.nextInt();

    int max = first_num > second_num ? first_num : second_num;
    int min = first_num < second_num ? first_num : second_num;

    System.out.println(max + " > " + min);

  }
}
