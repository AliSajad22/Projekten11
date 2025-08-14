var Input = document.getElementById('price');

var button = document.getElementById('btn');

var result = document.getElementById('shoe');

button.onclick = function(){
   if (Input.value >= 100 && Input.value <= 300){
    result.src = 'Bild/red.jpg'
   } else if (Input.value >= 301 && Input.value <= 450){
      result.src = 'Bild/black.jpg'
   } else if (Input.value >= 451 && Input.value <= 600){
    result.src = 'Bild/green.jpg'
 }  else if (Input.value >= 601 && Input.value <= 950){
    result.src = 'Bild/blau.jpg'
 }
    
}