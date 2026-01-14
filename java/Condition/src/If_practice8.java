import java.util.Scanner;

//시험문제

public class If_practice8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int first_num = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int second_num = sc.nextInt();
    System.out.print("세 번째 수 : ");
    int third_num = sc.nextInt();

    int max_num = 0, mid_num = 0, min_num = 0;

    if(first_num > second_num && first_num > third_num){
      max_num = first_num;
      if (second_num > third_num){
        mid_num = second_num;
        min_num = third_num;
      }else{
        mid_num = third_num;
        min_num = second_num;
      }
    }else if(second_num > first_num && second_num > third_num){
      max_num = second_num;
      if(first_num > third_num){
        mid_num = first_num;
        min_num = third_num;
      }else{
        mid_num = third_num;
        min_num = first_num;
      }
    }else{
      max_num = third_num;
      if(first_num > second_num){
        mid_num = first_num;
        min_num = second_num;
      }else{
        mid_num = second_num;
        min_num = first_num;
      }
    }

    System.out.println(max_num + " > " + mid_num + " > " + min_num);

  }
}
