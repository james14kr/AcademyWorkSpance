import java.util.Scanner;

public class 문자열입력받기 {
  public static void main(String[] args) {
    //키보드 입력을 위한 객체 생성
    Scanner sc = new Scanner(System.in);

    System.out.println("이름을 입력하세요 : ");

    String name = sc.next();
    System.out.println(name);

    int num = sc.nextInt();
    System.out.println(num);

  }
}
