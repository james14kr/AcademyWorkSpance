import java.util.Scanner;

public class If_practice5 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String grade = "";
    System.out.println("점수 입력 : ");
    int score = sc.nextInt();

    if(score > 90 && score <= 100){
      grade = "A";
    }else if(score > 80){
      grade = "B";
    }else{
      grade = "C";
    }
    System.out.println("학점은 "  + grade + "입니다.");

  }
}
