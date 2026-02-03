import java.util.Scanner;

public class Test5 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int[] randomNum = new int[3];
    int[] inputNum = new int[3];
    int gameCount = 1;
    boolean result = true;

//    System.out.print("만들어진 숫자 : ");
    for (int i = 0; i < 3; i++){
      randomNum[i] = (int)(Math.random() * 9 + 1);
      for(int j = 0; j < i; j++) {
        if (randomNum[i] == randomNum[j]) {
          i--;
          break;
        }
      }
    }
//    for (int i = 0; i < 3; i++){
//      System.out.print(randomNum[i] + " ");
//    }
    System.out.println();
    System.out.println("숫자를 정했습니다. 게임을 시작합니다.");

    while (result){
      int strike = 0;
      int ball = 0;

      System.out.print(gameCount + " >> ");
      for(int i = 0; i < inputNum.length; i++){
        inputNum[i] = sc.nextInt();
      }

      for (int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
          if(randomNum[i] == inputNum[j]){
            if(i == j){
              strike++;
            } else {
              ball++;
            }
          }
        }
      }
      System.out.println(strike + " 스트라이크 " + ball + " 볼");

      if(strike == 3){
        result = false;
        System.out.println(gameCount + "회만에 정답을 맞췄습니다.");
      }
      gameCount++;
    }
  }
}

