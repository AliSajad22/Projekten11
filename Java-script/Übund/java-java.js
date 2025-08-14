var Input = document.getElementById('price');

var button = document.getElementById('btn');

var result = document.getElementById('shoes');


button.onclick = function(){
    if (Input.value <= 100 ) {
        result.src = 'Bild/red.jpg'
    } else if ( Input.value <= 301 ){
        result.src = 'Bild/green.jpg'
    } else if (Input.value >= 501 && Input.value <= 601){
        result.src = 'Bild/black.jpg'
    }  else if (Input.value >= 701 && Input.value <= 801){
        result.src = 'Bild/blue.jpg'
    } 
}