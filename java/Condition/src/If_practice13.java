import java.util.Scanner;

public class If_practice13 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int sum = 0;

    System.out.print("첫 번째 : ");
    int num1 = sc.nextInt();

    System.out.print("두 번째 : ");
    int num2 = sc.nextInt();

    System.out.print("연산자 : ");
    String opr = sc.next();

    if(opr.equals("+")){
      sum = num1 + num2;
      System.out.println(num1 + opr + num2 + " = " + sum);
    }else if(opr.equals("-")){
      sum = num1 - num2;
      System.out.println(num1 + opr + num2 + " = " + sum);
    }else if(opr.equals("*")){
      sum = num1 * num2;
      System.out.println(num1 + opr + num2 + " = " + sum);
    }else if(opr.equals("/")){
      sum = num1 / num2;
      System.out.println(num1 + opr + num2 + " = " + sum);
    }else{
      System.out.println("연산자를 잘못 입력했습니다.");
    }

    switch (opr){
      case "+" :
        sum = num1 + num2;
        System.out.println(num1 + opr + num2 + " = " + sum);
        break;
      case "-" :
        sum = num1 - num2;
        System.out.println(num1 + opr + num2 + " = " + sum);
        break;
      case "*" :
        sum = num1 * num2;
        System.out.println(num1 + opr + num2 + " = " + sum);
        break;
      case "/" :
        sum = num1 / num2;
        System.out.println(num1 + opr + num2 + " = " + (double)sum);
        break;
      default:
        System.out.println("연산자를 잘못 입력했습니다.");
    }

  }
}
