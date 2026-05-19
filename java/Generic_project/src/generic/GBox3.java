package generic;

//특정 메서드에만 제네릭 사용
public class GBox3 {

  public void aaa() {}

  // 제네릭 메서드: 매개변수로 객체가 전달되면 그 객체를 담고 있는 상자를 리턴
  public <T> GBox<T> makeBox(T t) {
    GBox<T> box = new GBox<>();
    box.set(t);
    return box;
  }

  // 와일드카드 + 상한 제한(upper bound): generic.Phone 또는 그 하위 타입(generic.IPhone, generic.Galaxy 등)만 허용
  // get()은 가능, set()은 불가 (어떤 하위타입인지 컴파일러가 모름)
  public void ccc(GBox<? extends Phone> box) {
    Phone phone = box.get();  // Phone으로 꺼낼 수 있음
    System.out.println(phone.say());
  }

  // 와일드카드 + 하한 제한(lower bound): generic.IPhone 또는 그 상위 타입(generic.Phone, Object)만 허용
  // set()은 가능, get()은 Object로만 꺼낼 수 있음
  public void ddd(GBox<? super IPhone> box) {
    box.set(new IPhone());  // generic.IPhone 또는 하위 타입은 넣을 수 있음
  }

}
