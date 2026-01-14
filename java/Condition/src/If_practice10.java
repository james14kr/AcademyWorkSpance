import java.util.Scanner;

public class If_practice10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int xnum, ynum;

    System.out.print("점 (x, y)의 좌표를 입력하시오 : ");
    xnum = sc.nextInt();
    ynum = sc.nextInt();

    if((xnum > 50 && xnum < 100)&&(ynum > 50 && ynum < 100)){
      System.out.println("사각형 안에 점이 있습니다.");
    }else{
      System.out.println("사각형 안에 점이 없습니다.");
    }

  }
}
