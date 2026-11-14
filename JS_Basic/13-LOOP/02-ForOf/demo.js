var arr = [];
arr.push('Java');
arr.push('PHP');

for(let value of arr){
    console.log(value);
}
// for of rất nhanh nhưng nó có 1 vde đó là nó ko in ra số index
// vậy muốn lấy index thì sao

// Cách 1: dùng i++;

// Cách 2: dùng thuộc tính .entries()
for(const [index, value] of arr.entries()){
    console.log(index, value);
}
// cách 3: for() truyền thống

// cách 4: dùng for each(): bên trong for each là 1 function (value, index)
arr.forEach((value, index)=>{
    console.log(index, value);
})

// for of ko chơi được với obj là bởi vì 1 phần nó không nhận ra đc giá trị 
// mình muốn lấy trong obj là TÊN property hay là GTRI của property đó.
// 1 phần obj ko có số index và cũng ko phải là mảng.

//Do đó mình phải chuyển đổi obj sang mảng

// cách truyền thống

var obj ={
    name : 'Nguyen Minh Quang',
    age: 22
}
let obArr=[];
for(const key in obj){
    obArr.push(key);
}

for(const value of obArr){
    console.log(obj[value]);
}

// Dùng với Object.keys(obj)
for (const key of Object.keys(obj)){

}

// Hoặc muốn lấy value Object.values(obj)
for(const value of Object.values(obj)){

}



