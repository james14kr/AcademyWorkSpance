public class Test2_1 {
  public static void main(String[] args) {
    System.out.println("<<1번 문제>>");
    for (int i = 1; i <= 10; i++){
      if(i % 2 == 0){
        continue;
      }
      System.out.println(i);
    }

    System.out.println("<<2번 문제>>");

    int i = 0;
    while (true){
      if(i == 7){
        break;
      }
      i++;
      System.out.println(i);
    }

    System.out.println("<<3번 문제>>");

    int sum = 0;
    for (int j = 1; j <= 20; j++){
      if(j % 3 == 0){
        continue;
      }
      sum += j;
    }
    System.out.println(sum);

    System.out.println("<<4번 문제>>");

    for(int j = 2; j <= 9; j++){
      for (int k = 1; k <= 9; k++){
        System.out.println(j + "*" + k + "=" + j*k);
      }
    }

    System.out.println("<<5번 문제>>");

    for(int j = 2; j <= 30; j++){
      int count = 0;
      for(int k = 1; k <= j; k++){
        if(j % k == 0){
          count++;
        }
      }
      if(count == 2){
        System.out.print(j + " ");
      }
    }

  }
}
