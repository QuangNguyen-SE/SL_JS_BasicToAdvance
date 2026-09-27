console.log("Xin chao javascript");

var a = 1;
var b = 2;

var firstName = 'Quang';
var secondName = 'Tuan';
var mess;

if(a>=b){
    mess = 'Correct'
}else{
    mess = 'Wrong'
}

if(firstName == secondName){
    document.getElementById("render").innerText= 'Correct'
}else{
    document.getElementById("render").innerText= 'wrong'
}



document.getElementById("root").innerText= mess; 
 