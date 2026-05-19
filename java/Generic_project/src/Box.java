//Generic: 자료형을 클래스나 매소드 정의 단계에서 정하지 않고, 객체 생성 시 자료형을 지정하는 코드 작성 문법

//오렌지, 사과를 저장하고 빼낼 수 있는 상자
public class Box {
  private Object obj;

  public void set(Object obj){
    this.obj = obj;
  }

  public Object get(){
    return obj;
  }
}

class Orange{
  public String say(){
    return "I am Orange";
  }
}

class Apple{
  public String say(){
    return "I am Apple";
  }
}

// 와일드카드 상한/하한 제한 예제에 사용할 클래스 계층
class Phone {
  public String say(){
    return "I am Phone";
  }
}

class IPhone extends Phone {
  @Override
  public String say(){
    return "I am IPhone";
  }
}

class Galaxy extends Phone {
  @Override
  public String say(){
    return "I am Galaxy";
  }
}

