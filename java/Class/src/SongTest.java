public class SongTest {
  public static void main(String[] args) {

    Song s1 = new Song();

    String[] composers = {"황민서", "김민서", "박민서"};

    s1.setSong("song", "hwangminseo", "album", 2003, composers);

    s1.printInfo();

  }
}
