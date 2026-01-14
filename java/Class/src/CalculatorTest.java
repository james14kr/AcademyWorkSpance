import java.util.Scanner;

public class CalculatorTest {

  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);
    Calculator cal = new Calculator();

    System.out.print("첫 번째 수 : ");
    int num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    int num2 = sc.nextInt();

    System.out.print("연산자 : ");
    String operator = sc.next();

    int result = switch (operator) {
      case "+" -> cal.add(num1, num2);
      case "-" -> cal.sub(num1, num2);
      case "/" -> cal.mul(num1, num2);
      default -> cal.div(num1, num2);
    };

    System.out.println(num1 + " " + operator + " " + num2 + " = " + result);

  }

}
