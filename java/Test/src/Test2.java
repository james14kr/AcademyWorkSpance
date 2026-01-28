public class Test2 {
  public static void main(String[] args) {

    int[] randomNum = new int[6];

    for (int i = 0; i < randomNum.length; i++){
      randomNum[i] = (int) (Math.random() * 35 +1);
      System.out.print(randomNum[i] + " ");
    }

  }
}
