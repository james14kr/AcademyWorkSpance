public class Method {
  public static void main(String[] args) {
    printSum(10, 20);
    printInfo("hwangminseo", 23);
  }

  public static void printInfo(String name, int age){
    System.out.println(name);
    System.out.println(age);
  }

  public static void printSum(int a, int b){
    System.out.println(a+b);
  }
}
