//T: 타입 매개변수(Type Parameter)
//타입 인자 : 타입 매개변수에 전달된 자료형

public class GBox<T> {

  private  T obj;

  public void set(T obj){
    this.obj = obj;
  }

  public T get(){
    return obj;
  }

}
