# Method built-in trong Array 
- Method built-in trong array có rất nhiều
- Và thường có 2 loại method chủ yếu:
    1. Method chỉ trả về kết quả và không thay đổi cấu trúc mảng.
    2. Method làm thay đổi các phần tử mảng theo cấu trúc CRUD, và ADD-REMOVE.

## 1. Method không thay đổi cấu trúc bên trong array.
- Là các method không làm thay đổi phần tử bên trong array gọi tới nó
### toString();
- Biến mảng thành 1 chuỗi.
```js
    var str = array.toString();
```

### concat();
- Gộp 2 mảng lại và trả về 1 mảng mới.
```js
    var arr3 = arr1.concat(arr2);
```

### slice(x, y);
- Cắt các phẩn từ đc chỉ định bằng tham số x, y và trả về 1 mảng
- slice là 1 method theo quy tắc **Lấy đầu bỏ cuối**
    - Vì sao lại có quy tắc lấy đầu bỏ cuối này, có 4 lí do:
        1.  Độ dài = end - start.
            ```js
            arr.slice(1, 4);  // 4 - 1 = 3 phần tử
            ```
        2. Nối các đoạn liền kề không bị trùng hay hở
            ```js
            arr.slice(0, 3);  // index 0,1,2
            arr.slice(3, 6);  // index 3,4,5
            ```
        3. Lấy đến hết mảng gọn
            ```js
            arr.slice(2, arr.length);  // end = length là hợp lệ
            ```
        4. Đoạn rỗng biểu diễn tự nhiên
            ```js
             a | b | c | d | e
            0  1   2   3   4   5
            ```
            - `slice(1, 3)` cắt từ vạch 1 đến vạch 3 → b, c.

## 2. Method thay đổi phần tử của mảng.