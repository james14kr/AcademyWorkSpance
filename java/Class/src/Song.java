public class Song {

  String title;
  String artist;
  String album;
  int year;
  String[] composer = new String[3];

  public void setSong(String t, String a, String al, int y, String[] com){
    title = t;
    artist = a;
    album = al;
    year = y;

    composer = com;

  }

  public void printInfo(){
    System.out.println("Title : " + title);
    System.out.println("Artist : " + artist);
    System.out.println("Album : " + album);
    System.out.println("Year : " + year);
    System.out.print("Composer : ");

    for (int i = 0; i < composer.length; i++){
      System.out.print(composer[i] + " ");
    }

  }




}
