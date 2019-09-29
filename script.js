console.log("Hallo, console?");

/*Stap 1: We nemen elk album en de video vast*/
let albumEen = document.getElementsByClassName("album1")[0];
let albumTwee = document.getElementsByClassName("album2")[0];
let albumDrie = document.getElementsByClassName("album3")[0];
let videoEen = document.getElementsByTagName("video")[0];

/*Stap 2: We zetten op elk album een eventlistener*/
albumEen.addEventListener("mouseover", toonAlbum);
albumTwee.addEventListener("mouseover", toonAlbum);
albumDrie.addEventListener("mouseover", toonAlbum);

/*Stap 3: We schrijven de functie die van video switcht als er over een album gehoverd wordt*/
function toonAlbum(){
  console.log("toonAlbum werkt!");
  if (this === albumEen) {
    videoEen.setAttribute("src", "slide3/queen2.mp4");
  } if (this === albumTwee) {
    videoEen.setAttribute("src", "slide3/roxymusic.mp4");
  } if (this === albumDrie) {
    videoEen.setAttribute("src", "slide3/simongarfunkel.mp4");
  }
}
