package stream;

public class Student {

  private String name;
  private int korScore;
  private int engScore;

  public Student(String name, int korScore, int engScore) {
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
  }

  public String getName() {
    return name;
  }

  public int getKorScore() {
    return korScore;
  }

  public int getEngScore() {
    return engScore;
  }
}
