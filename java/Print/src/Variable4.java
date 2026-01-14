import java.sql.SQLOutput;

public class Variable4 {
  public static void main(String[] args){
    int a = 10;
    int b = 20
            ;

    System.out.println("int a = " + a + " int b = " + b);

    int c = a;
    a = b;
    b = c;

    System.out.println("int a = " + a + " int b = " + b);

  }
}
