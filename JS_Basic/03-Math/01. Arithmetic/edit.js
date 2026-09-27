console.log("Xin chao javascript");

let a = 2;
console.log(a);

let b = 3;

if(b<a){
    console.log("b be hon a");
}else{
    console.log("b lon hon a");
}

let c = a**b;

let d = ++c + 1 ;

document.getElementById("root").innerText= c;
document.getElementById("render").innerText= d;