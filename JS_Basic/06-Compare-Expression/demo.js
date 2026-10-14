
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
  //đây là câu lệnh điều kiện OR, chỉ khi điều kiện đúng nó mới gắn vào biến
  var displayName = name || "Ẩn danh";
  // Nếu name ko có gtri, tức là 1 chuỗi rỗng, Null -> falsy -> "ẩn danh";
  // Nếu name có gtri, tức là không rỗng, gtri -> truthy -> name
  console.log("Xin chào, " + displayName);
}