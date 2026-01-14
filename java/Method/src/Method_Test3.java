import java.sql.SQLOutput;
import java.util.Scanner;

public class Method_Test3 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.print("정수 입력 : ");
    int num1 = sc.nextInt();
    test1(num1);
    test2(num1);

    System.out.println("랜덤 숫자 : " + (int) test3());

    int[] arr = {1, 2, 3, 4, 5};
    test4(arr);

    int max = test5(arr);
    System.out.println(max);

    String[] arr2 = {"안", "녕"};
    test6(arr2);

    int[] numArr1 = {1, 2, 3};
    int[] numArr2 = {1, 2, 3};

    int[] resultArr = test7(numArr1, numArr2);
    for (int i = 0; i < resultArr.length; i++) {
      System.out.print(resultArr[i] + " ");
    }
    System.out.println(" ");


    int[] numArr3 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int[] resultArr2 = test8(numArr3);
    for(int i = 0; i < resultArr2.length; i++){
      System.out.print(resultArr2[i] + " ");
    }
    System.out.println(" ");

    int switchNum1 = 1;
    int switchNum2 = 2;

    test9(switchNum1, switchNum2);

    int[] switchArr1 = {1};
    int[] switchArr2 = {3};

    test10(switchArr1, switchArr2);

    int[] dec = new int[10];
    for(int i = 0; i < dec.length; i++){
      dec[i] = (int) (Math.random() * 50) + 1;
      System.out.print(dec[i] + " ");
    }

    System.out.println(" ");

    test11(dec);
    System.out.print("내림차순 결과 :");
    for(int i = 0; i < dec.length; i++){
      System.out.print(dec[i] + " ");
    }

  }

  public static void test1(int num) {
    for (int i = 1; i <= 9; i++) {
      System.out.println(num + " * " + i + " = " + num * i);
    }
  }

  public static void test2(int num) {
    for (int i = 1; i <= 100; i++) {
      if (i % num == 0) {
        System.out.print(i + " ");
      }
    }
    System.out.println(" ");
  }

  public static double test3() {
    return (int) (Math.random() * 50) + 1;
  }

  public static void test4(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println(" ");
  }

  public static int test5(int[] arr) {
    int max = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  public static void test6(String[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]);
    }
    System.out.println(" ");
  }

  public static int[] test7(int[] arr1, int[] arr2) {
    int[] result = new int[arr1.length + arr2.length];

    for (int i = 0; i < arr1.length; i++) {
      result[i] = arr1[i];
    }
    for(int i = 0; i < arr2.length; i++){
      result[arr1.length + i] = arr2[i];
    }

    return result;

  }

  public static int[] test8(int[] arr){
    int count = 0;

    for(int i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        count++;
      }
    }
    int[] result = new int[count];
    int idx = 0;

    for(int i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        result[idx++] = arr[i];
      }
    }
    return result;
  }

  public static void test9(int a, int b){
    int c = 0;

    c = a;
    a = b;
    b = c;

    System.out.println("a : " + a + " b : " + b);

  }

  public static void test10(int[] a, int[] b){
   int c = a[0];
   a[0] = b[0];
   b[0] = c;

    System.out.println("a : " + a[0] + " b : " + b[0]);
  }

  public static void test11(int[] arr){
    for (int i = 0; i < arr.length; i++){
      for (int j = i+1; j <arr.length; j++){
        if(arr[i]<arr[j]){
          int min = arr[i];
          arr[i] = arr[j];
          arr[j] = min;
        }
      }
    }
  }

}
