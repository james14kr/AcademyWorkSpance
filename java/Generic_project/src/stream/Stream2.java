package stream;

import java.util.ArrayList;
import java.util.List;

public class Stream2 {
  public static void main(String[] args) {
    List<Student> stuList = new ArrayList<>();
    stuList.add(new Student("kim", 100, 90));
    stuList.add(new Student("lee", 90, 100));
    stuList.add(new Student("park", 80, 80));
    stuList.add(new Student("hong", 70, 60));
    stuList.add(new Student("yeon", 60, 90));

    //1. 학생 리스트에서 국어 점수가 80점 이상인 학생만 추출
    List<Student> r1 = stuList.stream()
            .filter(stu -> stu.getKorScore() >= 80)
            .toList();

    //2. 국어점수는 70점 이상 영어점수는 80점 이상인 학생만 추출
    List<Student> r2 = stuList.stream()
            .filter(stu -> stu.getKorScore() >= 70 && stu.getEngScore() >= 80)
            .toList();

    List<Student> r3 = stuList.stream()
            .filter(stu -> stu.getKorScore() >= 70 )
            .filter(stu -> stu.getEngScore() >= 80)
            .toList();

    //3. 리스트에 저장된 학생들의 국어점수만 리스트로 추출
    List<Integer> r4 = stuList.stream()
            .map(Student::getKorScore)
            .toList();

    //4. 총점이 150점 이상인 학생들의 이름을 리스트로 반환
    List<String> r5 = stuList.stream()
            .filter(stu -> stu.getKorScore() + stu.getEngScore() >= 150)
            .map(stu -> stu.getName())
            .toList();

    //국어점수의 합
    int r6 = stuList.stream()
            .mapToInt(stu -> stu.getKorScore())
            .sum();

    //평균 국어점수
    double r7 = stuList.stream()
            .mapToInt(stu -> stu.getKorScore())
            .average().getAsDouble();

    //거장 큰수
    int r8 = stuList.stream()
            .mapToInt(stu -> stu.getKorScore())
            .max().getAsInt();


    //가장 작은수
    int r9 = stuList.stream()
            .mapToInt(stu -> stu.getKorScore())
            .min().getAsInt();

    //학생수
    long r10 = stuList.stream()
            .map(stu -> stu.getKorScore())
            .count();

  }

}
