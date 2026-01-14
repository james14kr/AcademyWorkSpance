import java.util.Scanner;

public class Test_1 {
  public static void main(String[] args) {
    int i = 1, sum = 0;

    while (i <= 10){
      sum += i;
      i++;
    }

    System.out.println(sum);

    int j = 1;
    int count1 = 0;

    while (j <= 100){
      if(j % 3 == 0){
        count1++;
      }
      j++;
    }

    System.out.println(count1);

    int k = 1;
    int count2 = 0;

    while (k <= 100){
      if(k % 5 == 0){
        System.out.print(k + " ");
        count2++;
      }
      k++;
    }

    System.out.println(count2);

    Scanner sc = new Scanner(System.in);

    System.out.print("정수 입력 : ");
    int num = sc.nextInt();
    int h = 1;
    int count3 = 0;

    while (h <= num){
      if(h % 2 == 0){
        count3++;
      }
      h++;
    }
    System.out.println(count3);


    System.out.print("첫 번째 정수 : ");
    int first = sc.nextInt();
    System.out.print("두 번째 정수 : ");
    int second = sc.nextInt();

    int result = 0;

    if(first < second){
      while (first < second) {
        ++first;
        result += first;
      }
    }else if (first > second){
      while (second < first){
        ++second;
        result += second;
      }
    }

    System.out.println(result);

  }
}
