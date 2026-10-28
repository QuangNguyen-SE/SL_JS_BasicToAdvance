# Todo API (Spring Boot 3, Java 21)

Project mẫu để học backend: REST API + JPA + JWT + phân quyền.

## Chạy

Cần **JDK 21**. Nếu `JAVA_HOME` đang trỏ vào JDK cũ (vd 8) thì đổi trong phiên terminal đó:

```powershell
$env:JAVA_HOME = "C:\Program Files\Java\jdk-21"
.\mvnw.cmd spring-boot:run     # chạy server tại http://localhost:8080
.\mvnw.cmd test                # chạy test
```

Mặc định dùng **H2** (file `./data/tododb`), không cần cài DB.
Dùng **PostgreSQL**:

```powershell
docker compose up -d
.\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=postgres"
```

Swagger UI (thử API trên trình duyệt): http://localhost:8080/swagger-ui.html
Bấm **Authorize** và dán token nhận từ `/api/auth/login`.

## Endpoint

| Method | URL | Quyền | Mô tả |
|---|---|---|---|
| POST | `/api/auth/register` | công khai | Đăng ký, trả JWT |
| POST | `/api/auth/login` | công khai | Đăng nhập, trả JWT |
| GET | `/api/todos?page=0&size=10` | đăng nhập | Danh sách todo của mình (phân trang) |
| GET | `/api/todos/{id}` | đăng nhập | Chi tiết |
| POST | `/api/todos` | đăng nhập | Tạo |
| PUT | `/api/todos/{id}` | đăng nhập | Sửa |
| DELETE | `/api/todos/{id}` | đăng nhập | Xóa |
| GET | `/api/admin/users` | ADMIN | Danh sách user (thử `admin` / `admin123`) |

Thử nhanh bằng curl:

```bash
curl -X POST localhost:8080/api/auth/register -H "Content-Type: application/json" \
     -d '{"username":"alice","password":"secret1"}'
# lấy token từ kết quả, rồi:
curl localhost:8080/api/todos -H "Authorization: Bearer <token>"
```

## Cấu trúc và thứ tự nên đọc code

1. `user/User.java`, `todo/Todo.java`: **Entity** (ánh xạ bảng, quan hệ `@ManyToOne`)
2. `todo/TodoRepository.java`: **Spring Data JPA**, query method, phân trang
3. `todo/TodoRequest.java`, `TodoResponse.java`: **DTO** + validation
4. `todo/TodoService.java`: logic nghiệp vụ, `@Transactional`
5. `todo/TodoController.java`: **REST controller**
6. `common/GlobalExceptionHandler.java`: xử lý lỗi tập trung
7. `security/*`: **Spring Security + JWT** (`SecurityConfig` -> `JwtAuthFilter` -> `JwtService`)
8. `auth/*`: đăng ký / đăng nhập
9. `src/test/.../TodoApiIntegrationTest.java`: test toàn bộ luồng

## Các điểm bảo mật đã áp dụng (đối chiếu với OWASP)

- Mật khẩu băm bằng **BCrypt**, không lưu thô
- Mọi endpoint **mặc định bị chặn**, chỉ mở `/api/auth/**` và Swagger
- **Chống truy cập chéo dữ liệu**: truy vấn luôn lọc theo chủ sở hữu, todo của người khác trả 404
- Phân quyền theo vai trò: `@PreAuthorize("hasRole('ADMIN')")`; role đăng ký luôn là USER
- **Validation** mọi input; DTO không lộ password hash
- **SQL Injection**: dùng JPA/tham số hóa, không nối chuỗi SQL
- Thông báo đăng nhập sai chung chung; chưa đăng nhập trả 401, thiếu quyền trả 403
- JWT có hạn (60 phút), secret lấy từ biến môi trường `JWT_SECRET`

## Việc cần làm trước khi deploy thật

- Đặt `JWT_SECRET` (>= 32 ký tự ngẫu nhiên) và `app.seed-admin=false`
- Đổi `ddl-auto` sang `validate` và dùng Flyway/Liquibase
- Bắt buộc HTTPS, cấu hình CORS cho domain frontend
- Thêm refresh token, rate limiting đăng nhập

## Bài tập mở rộng

1. Thêm trường `dueDate` và lọc `GET /api/todos?done=true`
2. Thêm entity `Category` (quan hệ `@OneToMany`) và gán todo vào category
3. Cấu hình CORS cho frontend ở `localhost:3000`
4. Thêm refresh token
5. Dùng Flyway thay `ddl-auto: update`
