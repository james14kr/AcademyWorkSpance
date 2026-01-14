import java.util.Scanner;

public class Array_Test_2 {
  public static void main(String[] args) {
    System.out.println("<<1번 문제>>");
    Scanner sc = new Scanner(System.in);

    System.out.print("정수 입력 : ");
    int num = sc.nextInt();

    int[] arr1 = new int[num];

    for (int i = 0; i < arr1.length; i++){
      arr1[i] = i+1;
    }

    for(int i = 0; i < arr1.length; i++){
      System.out.print(arr1[i] + " ");
    }

    System.out.println("");
    System.out.println("<<2번 문제>>");

    int[] arr = {5,4,3,2,1};
    int[] newArr = new int[5];

    for(int i = 0; i < arr.length; i++){
      newArr[i] = arr[i];
    }
    for(int i = 0; i < arr.length; i++){
      System.out.print(newArr[i] + " ");
    }

    System.out.println("");
    System.out.println("<<3번 문제>>");

    int[] arr2 = {1,2,3};
    int[] arr3 = {4,5,6};

    int[] newArr2 = new int[arr2.length + arr3.length];

    for(int i = 0; i < newArr2.length; i++){
      if(i < arr2.length){
        newArr2[i] = arr2[i];
      }else{
        newArr2[i] = arr3[i - arr3.length];
      }
    }
    for(int i = 0; i < newArr2.length; i++){
      System.out.print(newArr2[i] + " ");
    }

    System.out.println("");
    System.out.println("<<4번 문제>>");

    double d = Math.random();
    int result = 50 + (int) (d * 50);
    System.out.println(result);


  }
}
