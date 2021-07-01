alert("welcome to my webpage")
var x = prompt("What is the most famous film for leonardo dicaprio ?")

if (x == "Titanic") {
  alert("Right answer ^-^")
}	
else {
  alert("Wrong answer -_-")
}

var favmovie = prompt("What is your fav Movie for loe ? (Titanic, The revenant, Catch me if you can)")

while(favmovie != "Titanic" && favmovie != "The revenant" && favmovie != "Catch me if you can")
 {
  favmovie = prompt("What is your fav Movie for loe ? (Titanic, The revenant, Catch me if you can) ")
}

if (favmovie == "Titanic"){
   var times= prompt("How many times do you want to see it in My webpage ? please choose (1-5)") 

for ( var i = 0 ; i < times && times < 6; i++){
  document.write("<div>" + "<h3>" + favmovie + "</h3>" + "<img src='https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' width='500' height='300''" + "</div>"
    )
}
}
else if (favmovie == "The revenant"){
  var times= prompt("How many times do you want to see it in My webpage ? please choose (1-5)")

  for ( var i = 0 ; i < times && times < 6; i++){
  document.write( "<div>" + "<h3>" + favmovie + "</h3>" + "<img src='https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg' width='500' height='300''" + "</div>")
}
}
else if (favmovie == "Catch me if you can") {
 var times= prompt("How many times do you want to see it in My webpage ? please choose (1-5)")

 for ( var i = 0 ; i < times && times < 6; i++){
  document.write("<div" + "<h3>" + favmovie + "</h3>" + "<img src='https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg' width='500' height='300''" + "</div>") 

}
}



document.write("Welcome again ^-^ ")