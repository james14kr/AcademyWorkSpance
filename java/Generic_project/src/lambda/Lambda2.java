package lambda;

// [java.util.function 패키지 - 표준 함수형 인터페이스 4대장]
// Java가 람다를 쉽게 쓸 수 있도록 미리 만들어둔 함수형 인터페이스들

// 1. Predicate<T>  : boolean test(T t)
//    → 입력값을 받아 true/false 조건 판별 (필터링에 주로 사용)

// 2. Supplier<T>   : T get()
//    → 매개변수 없이 결과값만 반환 (데이터 공급자 역할)

// 3. Consumer<T>   : void accept(T t)
//    → 입력값을 받아 처리하고 반환값은 없음 (출력, 저장 등에 사용)

// 4. Function<T,R> : R apply(T t)
//    → 입력(T)을 받아 다른 타입(R)으로 변환하여 반환

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Lambda2 {

  public static void main(String[] args) {

    // [Function<T, R> 사용 예시]
    // String을 받아서 → Integer(문자열 길이)를 반환
    // str.length()의 반환형 int는 Integer로 오토박싱된다
    Function<String,Integer> f = str -> str.length();
    System.out.println(f.apply("abc")); // 출력: 3


    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);

    // [Consumer<T> 사용 예시 - 변수로 저장 후 전달]
    // Integer를 받아 출력만 하고 반환값 없음
    Consumer<Integer> c = num -> System.out.println(num);
    list.forEach(c); // 출력: 1 2 3 4 5 (각 줄)

    // [Consumer<T> 사용 예시 - 인라인으로 바로 전달]
    // forEach()의 매개변수 타입이 Consumer<T>이므로 람다를 직접 넘길 수 있다
    // 위의 c 변수 방식과 동일한 동작
    list.forEach(num -> System.out.println(num)); // 출력: 1 2 3 4 5 (각 줄)

    // [Predicate<T> 사용 예시]
    // 짝수 조건: num % 2 == 0이면 true 반환
    Predicate<Integer> p1 = num -> {return num % 2 == 0;};
    sum(list, p1); // [1,2,3,4,5] 중 짝수(2,4)의 합 → 6 반환

    // 홀수 조건: num % 2 == 1이면 true 반환
    // Predicate만 교체하면 sum() 메서드를 재사용할 수 있다 (전략 패턴 구조)
    Predicate<Integer> p2 = num -> {return num % 2 == 1;};
    // sum(list, p2) 호출 시 → [1,2,3,4,5] 중 홀수(1,3,5)의 합 → 9 반환

  }

  // [범용 합산 메서드]
  // 어떤 조건(Predicate)으로 합산할지를 외부에서 주입받는 구조
  // → Predicate를 교체하는 것만으로 짝수 합, 홀수 합, 특정 범위 합 등 다양하게 활용 가능
  public static int sum(List<Integer> list, Predicate<Integer> p){
    int sum = 0;
    for(int e: list){
      if(p.test(e)){ // Predicate의 조건을 통과한 요소만 합산
        sum = sum + e;
      }
    }
    return sum;
  }

  // [미완성 메서드 - 추후 구현 예정]
  // 짝수의 합을 출력하는 메서드
  public static void printEvenSum(List<Integer> list){

  }

}
