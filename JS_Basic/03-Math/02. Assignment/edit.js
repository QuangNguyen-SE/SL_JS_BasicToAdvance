console.log("Xin chao javascript");

var a = 1;

var b = a++;

// Hậu tố a++ và Tiền tố ++a khác nhau là gì?
// a++ -> thực hiện phép tính trc rồi mới tăng gtri gốc lên sau;
// ++a -> tăng gtri trc rồi thực hiện phép tính sau

document.getElementById("root").innerText= b; 
document.getElementById("render").innerText= a;