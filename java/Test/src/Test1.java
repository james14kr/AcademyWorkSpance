import java.util.Arrays;
import java.util.Scanner;

public class Test1 {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int[] num = new int[3];

    for(int i = 0; i < 3; i++){
      System.out.print("정수 입력 : ");
      num[i] = sc.nextInt();
    }

    Arrays.sort(num);

    for(int i = 2; i >= 0; i--){
      System.out.print(num[i] + " ");
    }


  }


}

