var arr = [];
arr.push('Java');
arr.push('PHP');

for(let i of arr){
    console.log(i);
}
// for of rất nhanh nhưng nó có 1 vde đó là nó ko in ra số index, vậy muốn lấy thì sao

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