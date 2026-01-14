import java.util.Scanner;
import java.util.function.IntPredicate;

public class Array_Test_1 {
  public static void main(String[] args) {

    System.out.println("<<1번 문제>>");
    int[] arr1 = new int[3];
    float[] arr2 = new float[5];
    String[] arr3 = new String[10];
    int[] arr4 = {1, 5, 10};
    String[] arr5 = {"자바", "c언어", "파이썬"};

    System.out.println("<<5번 문제>>");
    int[] arr6 = {1, 2, 3, 4, 5};
    for(int i = 0; i < arr6.length; i++){
      if(i != 0 && i % 2 == 0){
        System.out.print(arr6[i] + " ");
      }
    }
    System.out.println("");

    System.out.println("<<6번 문제>>");
    int[] arr7 = new int[10];
    for(int i = 0; i < arr7.length; i++){
      System.out.print(arr7[i] + " ");
    }
    System.out.println("");

    System.out.println("<<7번 문제>>");

    int[] arr8 = new int[10];
    for (int i = 0; i < arr8.length; i++){
      arr8[i] = 3;
      System.out.print(arr8[i] + " ");
    }
    System.out.println("");

    System.out.println("<<8번 문제>>");

    int[] arr9 = new int[10];
    for(int i = 0; i < arr9.length; i++){
      arr9[i] = i+1;
      System.out.print(arr9[i] + " ");
    }

    System.out.println("");

    System.out.println("<<9번 문제>>");

    int[] arr10 = {1, 5, 7};
    int sum1 = 0;
    for (int i = 0; i < arr10.length; i++){
      sum1 += arr10[i];
    }
    System.out.println(sum1);

    System.out.println("<<10번 문제>>");

    Scanner sc = new Scanner(System.in);
    int[] arr11 = new int[5];
    for (int i = 0; i < arr11.length; i++){
      System.out.print("정수 입력 : ");
      int num1 = sc.nextInt();
      arr11[i] = num1;
    }

    for(int i = 0; i < arr11.length; i++){
      System.out.print(arr11[i] + " ");
    }

    System.out.println("");

    System.out.println("<<11번 문제>>");

    int count = 0;
    int[] arr12 = {1, 2, 3, 4, 5, 6, 7, 8};
    for (int i = 0; i < arr12.length; i++){
      if((arr12[i]+1) % 2 == 0){
        count++;
      }
    }

    int[] score = new int[3];
    int sum2 = 0;
    double avg = 0;

    String[] sub = {"국어", "영어", "수학"};

    for (int i = 0; i < score.length; i++){
      System.out.print(sub[i] + "점수 입력 : ");
      score[i] = sc.nextInt();
      sum2 += score[i];
    }
    avg = (double)sum2 / score.length;

    System.out.println("총점 :" + sum2);
    System.out.println("평균 : " + avg);


  }
}
