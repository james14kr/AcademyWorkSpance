public class Rectangle {

  int x1, x2, y1, y2;

  public Rectangle(){

  }

  public Rectangle(int x1, int x2, int y1, int y2){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }

  public void setValue(int x1, int y1, int x2, int y2){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }

  public void show(){
    int width;
    int height;

    if (x1 > x2) {
      width = x1 - x2;
    } else {
      width = x2 - x1;
    }

    if (y1 > y2) {
      height = y1 - y2;
    } else {
      height = y2 - y1;
    }

    System.out.println("가로 : " + width);
    System.out.println("세로 : " + height);
    System.out.println("넓이 : " + (width * height));
  }

  public int square(){
    int width = (x1 > x2) ? (x1 - x2) : (x2 - x1);
    int height = (y1 > y2) ? (y1 - y2) : (y2 - y1);

    return width * height;
  }

}
