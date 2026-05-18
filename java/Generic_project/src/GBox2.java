// 다중 타입 매개변수를 가진 제네릭 클래스
// K: Key 타입, V: Value 타입 (관례적 네이밍)
public class GBox2<K, V> {

  private K key;
  private V value;

  public void set(K key, V value) {
    this.key = key;
    this.value = value;
  }

  public K getKey() {
    return key;
  }

  public V getValue() {
    return value;
  }

  @Override
  public String toString() {
    return "GBox2{ key=" + key + ", value=" + value + " }";
  }

}
