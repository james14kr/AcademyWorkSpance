public class Test2 {
  public static void main(String[] args) {

    int[] lottery = new int[6];

    for(int i = 0; i < lottery.length; i++){
      lottery[i] = (int)(Math.random()*45 + 1);
      System.out.print(lottery[i] + " ");
    }

  }
}
