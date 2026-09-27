
//var result = 'A' || 'B';
//document.getElementById('root').innerHTML=result;

result = NaN || 'B';
document.getElementById('root').innerHTML=result;

var consequence = 'A' && 'B';
var consequence = 'A' && NaN && 'B';
document.getElementById('render').innerHTML=consequence;



// Vidu thực tế khi áp dụng kĩ thuật OR default value;
// OR luôn chọn giá trị mang tính truthy
// AND luôn chọn giá trị mang tính falsy như vidu ở trên
function greet(name) {
  var displayName = name || "Ẩn danh";
  console.log("Xin chào, " + displayName);
}