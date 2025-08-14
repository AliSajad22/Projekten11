let Input1 = document.getElementById('first');
let Input2 = document.getElementById('second');
let Button = document.getElementById('btn');
let Gesamt = document.getElementById('total');

Button.onclick = function(){
    let first = Number(Input1.value)
    let second = Number(Input2.value)
    let erstezahl = 0

    while(first <= second){
        erstezahl += first
        first++
    } 
    
    Gesamt.innerText = erstezahl
        
}


// let Input11 = document.getElementById('first');
// let Input22 = document.getElementById('second');
// let Button2 = document.getElementById('btn');
// let Gesamt1 = document.getElementById('total');

// Button2.onclick = function(){
//     let first = Number(Input11.value);
//     let second = Number(Input22.value);
//     let Gesamt11 = 0

//     while(first <= second ){
//         Gesamt11 += first
//         first++
//     }
//     Gesamt1.innerText = Gesamt11
// }