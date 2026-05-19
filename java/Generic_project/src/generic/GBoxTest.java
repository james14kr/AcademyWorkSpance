package generic;

import java.util.ArrayList;
import java.util.List;

public class GBoxTest {
  public static void main(String[] args) {

    // ── generic.GBox<T>: 단일 타입 매개변수 ──────────────────────────────
    GBox<Orange> b1 = new GBox<>();  // 타입 인자 생략 가능 (다이아몬드 연산자)
    b1.set(new Orange());
    Orange o = b1.get();  // 형변환 불필요 - 제네릭의 장점
    System.out.println(o.say());

    GBox<Apple> b2 = new GBox<>();
    b2.set(new Apple());
    Apple a = b2.get();
    System.out.println(a.say());

    // 컬렉션도 제네릭 사용 예시
    List<Orange> list = new ArrayList<>();
    list.add(new Orange());

    // ── generic.GBox2<K, V>: 다중 타입 매개변수 ─────────────────────────
    GBox2<String, Integer> entry = new GBox2<>();
    entry.set("나이", 25);
    System.out.println(entry.getKey() + " : " + entry.getValue());
    System.out.println(entry);  // toString() 확인

    GBox2<Orange, Apple> fruitPair = new GBox2<>();
    fruitPair.set(new Orange(), new Apple());
    System.out.println(fruitPair.getKey().say() + " & " + fruitPair.getValue().say());

    // ── generic.GBox3: 제네릭 메서드 ─────────────────────────────────────
    GBox3 box3 = new GBox3();

    // 타입 인자 명시 (생략해도 컴파일러가 추론 가능)
    GBox<Orange> ob = box3.<Orange>makeBox(new Orange());
    System.out.println(ob.get().say());

    // ── 와일드카드 상한 제한: ? extends generic.Phone ────────────────────
    // generic.Phone 및 하위 타입(generic.IPhone, generic.Galaxy) 모두 전달 가능
    GBox<IPhone> iphoneBox = new GBox<>();
    iphoneBox.set(new IPhone());
    box3.ccc(iphoneBox);   // IPhone은 Phone의 하위 타입이므로 허용

    GBox<Galaxy> galaxyBox = new GBox<>();
    galaxyBox.set(new Galaxy());
    box3.ccc(galaxyBox);   // Galaxy도 Phone의 하위 타입이므로 허용

    // ── 와일드카드 하한 제한: ? super generic.IPhone ─────────────────────
    // generic.IPhone 또는 상위 타입(generic.Phone, Object) 박스에만 전달 가능
    GBox<Phone> phoneBox = new GBox<>();
    box3.ddd(phoneBox);    // Phone은 IPhone의 상위 타입이므로 허용
    System.out.println(phoneBox.get().say());
  }
}
