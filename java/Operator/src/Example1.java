import java.util.Scanner;

public class Example1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int sum, score1, score2, score3;
    double avr1;

    System.out.print("국어 점수 : ");
    score1 = sc.nextInt();
    System.out.print("영어 점수 : ");
    score2 = sc.nextInt();
    System.out.print("수학 점수 : ");
    score3 = sc.nextInt();

    sum = score1 + score2 + score3;

    System.out.println("총 점 : " + sum);

    avr1 = (double)sum/3;

    System.out.println("평 균 : " + avr1);

  }
}
