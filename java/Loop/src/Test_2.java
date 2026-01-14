public class Test_2 {
  public static void main(String[] args) {

    int result = 0;

    for(int i = 1; i <= 10; i++){
      result += i;
    }
    System.out.println(result);

//    for (int i = 1; i < 10; i++){
//      for (int j = 1; j < 10; j++){
//        System.out.println(i + " * " + j +" = "+(i*j));
//      }
//      System.out.println("");
//    }
//
    int sum = 0;
    int i = 1;

    for(i = 1; sum <= 300; i++){
      sum += i;
    }
    System.out.println(sum);
    System.out.println(i-1);
  }
}
