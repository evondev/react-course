<!--
# Chương 1: Giới thiệu

- Intro(quan trọng)
- Các hình ảnh thiết kế: https://www.figma.com/file/QdQAEql2wghrn4qvWVaFUA/Evondev-ReactJS-UI?node-id=0%3A1
- Hướng dẫn sử dụng Figma: https://www.youtube.com/watch?v=1y1AtBn1psA
- Cài đặt các extensions và thiết lập quan trọng
- Cài đặt NodeJS và git scm
- Cài đặt React Dev tools và Redux Dev tools
- Học xong khóa này được những gì ?
- Làm sao để đạt hiệu quả cao nhất khi học
- Outline khóa học

# Chương 2: React cơ bản toàn tập

- Giới thiệu
- React là gì ?(Content)
- Create-react-app là gì ?
- Cài đặt React project với create-react-app
- JSX là gì ?
- Cách viết JSX hiệu quả
- Components là gì ? Viết 1 component đơn giản
- React Functional Component
- Chia nhỏ Component
- React parent/child components
- Ví dụ về Props với HTML và giao diện thực tế
- Thực hành
- Hướng dẫn viết CSS Styles cơ bản trong React: inline-style, className
- Rendering List Component trong React
- Refactor code
- Children props
- Recap

# Chương 3: React state cơ bản

- Giới thiệu
- State là gì ?
- React hooks là gì ?
- Re-render là gì ?
- Stateless, stateful components
- useState cơ bản phần 4
- Handling events
- Ví dụ Toggle
- Các nguyên tắc khi sử dụng hook useState cần biết
- Stale state nên biết
- Bài tập TicTacToe
- Vấn đề gặp phải khi state trở nên phức tạp
- Giới thiệu useReducer: initial state, action object, dispatch function, reducer function
- Khi nào sử dụng useReducer?
- Ví dụ với useReducer
- Thực hành: Refactor TicTacToe với useReducer
- React cập nhật State như thế nào ?
- Recap

# Chương 4: Styling & Component

- Giới thiệu
- CSS
- Sass
- Module CSS
- Cài đặt thư viện styled-component
- Cách sử dụng styled-component trong Component
- Cách sử dụng props trong styled-component
- Làm sao để tạo CSS Global với styled-component
- Cách sử dụng styled-component(cách 2)
- Tìm hiểu Theme trong styled-component
- Lưu ý khi viết styled-component
- Thực hành: Code giao diện Card components
- Giới thiệu tailwindCSS
- Cài đặt TailwindCSS
- Sử dụng TailwindCSS cơ bản
- Sử dụng JIT mode
- Sử dụng config
- Fix lỗi PostCSS trong TailwindCSS
- Update TailwindCSS version 3
- Recap

# Chương 5: useEffect

- Giới thiệu
- useEffect là gì ?
- Sử dụng useEffect để làm gì ?
- Side-effect là gì ?
- Các trường hợp sử dụng useEffect thường gặp
- Dependencies trong useEffect để làm gì ?
- Gọi API với useEffect
- Thực hành: picsum photos
- cleanup function là gì ?
- Tại sao phải cần cleanup
- Timer với useEffect
- Thực hành: Countdown timer
- DOM interaction với useEffect
- Thực hành: Fixed header with debounce(lodash)
- Lưu ý khi sử dụng useEffect
- Xử lý vấn đề vòng lặp vô tận trong useEffect
- Xử lý callback trong useEffect
- Tối ưu picsum photos
- Vấn đề dependencies phức tạp
- Thực hành Hacker News API
- Recap

# Chương 6: ref và custom hooks
- Giới thiệu
- useRef là gì ?
- Tại sao phải sử dụng useRef
- Tại sao ref không re-render
- Các trường hợp sử dụng ref
- Thực hành: Textarea auto resize
- Thực hành: Input auto focus
- Thực hành: Dropdown list
- Xử lý dependencies trong useEffect với ref
- Giới thiệu về custom hook
- Tại sao lại cần custom hook
- Nguyên tắc khi viết custom hook
- Viết custom hook useClickOutside cho Dropdown component
- Viết custom hook useNewTab
- Viết custom hook useHover
- Xử lý unmounted component với ref
- Tối ưu dự án HackerNews với custom hook useFetchHackerNews
- Recap

# Chương 7: Form toàn tập

- Giới thiệu
- Controlled component
- React form - input
- React form - textarea
- React form - select
- React form - input file
- React form - checkbox
- Viết custom hook useHandleChange
- Form validation cơ bản
- Thực hành: Movie Search App
- Register form với Form cơ bản
- Register form với Formik toàn tập
- Validation Register form với Yup toàn tập
- SignUp form với React Hook Form
- Recap formik
- Recap react-hook-form
- So sánh React hook form với formik
- Tìm hiểu thêm về Yup
- Bài tập Form
- Recap chương 7

# Chương 8: HOC, portal, propTypes

- Giới thiệu
- Fragments
- Portal là gì ? Tại sao phải dùng portal ?
- Vấn đề khi sử dụng overflow, zindex trong CSS
- Giải quyết Modal với portal
- Giải quyết Dropdown với portal, check scrollY
- Thử thách Tooltip với portal
- Sử dụng Error Boundaries cho component
- Tìm hiểu và sử dụng PropTypes cho component
- Tối ưu component Portal với PropTypes
- Tối ưu component Portal hook
- Tối ưu component Portal logic
- Thêm transition với react-transition-group
- Tối ưu component Tooltip với Portal
- Recap

# Chương 9: React context & React Router

- Giới thiệu
- React context
- Props drilling
- Context consumer
- Thực hành AuthContext
- Thực hành Photos Gallery
- Nested Context, Context re-render
- Router
- Protected routes
- Active link
- useNavigate
- useParams
- useLocation
- useHistory
- Nested routes
- Outlet

# Chương 10: Dự án Simple Movie

- Dự án Simple Movie
- Boilerplate
- Tìm hiểu và sử dụng thư viện Swiper
- Tìm hiểu và sử dụng React hooks SWR
- Bundling
- Code splitting
- Dynamic import
- Suspend
- Lazy
- Recap
- Thêm Loadmore với SWRInfinite
- Tối ưu code MovieMeta
- Thêm PropTypes, ErrorBoundary, Skeleton
- Thêm trang 404

# Chương 11: Advanced React

- Giới thiệu
- High Order Components pattern
- Render Props pattern
- Hooks pattern
- Composition component
- Thực hành Accordion Component
- Compound Components
- Flexible Compound Components
- Thực hành Toggle Component
- Recap HOC
- Recap Render props
- So sánh Render props với custom hooks
- Prop Collections and Getters pattern
- Control Props pattern
- State Reducer pattern
- Inversion of control
- useMemo
- useCallback
- React.memo
- Recap

# Chương 12: Firebase cơ bản toàn tập

- Giới thiệu Firebase
- Đăng ký và khởi tạo Firebase
- Tạo Firestore database
- Truy xuất dữ liệu
- Thêm Document trong Firebase
- Xóa Document trong Firebase
- Hiển thị dữ liệu realtime
- Tìm hiểu Firestore queries
- Timestamp và sắp xếp dữ liệu
- Truy xuất document
- Cập nhật document
- Auth
- SignUp
- SignOut
- Login
- Subscribe Auth changes

# Chương 13: Dự án Monkey Blogging

- Giới thiệu
- Setup - CRA
- Chức năng của dự án
- UI
- Recap

# Chương 14: Redux toàn tập

- Giới thiệu
- Redux là gì ?
- Tại sao phải dùng redux ?
- Khi nào nên dùng redux ?
- Kiến trúc của redux
- Tìm hiểu Observer Pattern trong Javascript
- Redux store, reducer, action, dispatch là gì ?
- Redux Toolkit
- Cài đặt
- Setup
- Simple Counter
- Tìm hiểu Generator Functions
- Redux Saga

# Chương 15: Dự án cuối khóa Crownfunding

- Giới thiệu và import giao diện
- Chèn fonts và thiết lập Tailwind config
- Tìm hiểu cấu trúc dự án
- Code giao diện trang SignUp: UI, Responsive, Validate Form, Components(Input, Button, Label, Checkbox)
- Code giao diện trang SignIn: UI, Responsive, Validate Form,
- Chức năng DarkMode với custom hooks
- Xây dựng Dashboard layout
- Xây dựng component Header
- Xây dựng component Sidebar
- Xây dựng component Search
- Xây dựng component FeatureCampaign
- Xây dựng component CampaignItem
- Xây dựng component Heading
- Thiết lập global store với Redux Saga
- Xử lý active sidebar link
- Xây dựng component thêm Campaign
- Xử lý validation
- Thêm thư viện date-picker và tùy biến
- Thực hiện thêm dữ liệu vào json-server
- JWT
- Đăng nhập
- Đăng ký
- Đăng xuất
- Permissions

# Chương 16: Kiến thức bổ sung

- StrictMode là gì ?
- Flow của React
- useLayoutEffect khác với useEffect như thế nào ?
- Các câu hỏi phỏng vấn bạn nên biết
- Vấn đề đặt tên, cấu trúc thư mục trong React
- Zustand là gì ? Khi nào nên dùng Zustand
- Cài đặt và thiết lập Zustand
- Refactor dự án HackerNews với Zustand
- Setup dự án với Vite
- Typescript là gì ?
- Ưu điểm khi dùng Typescript: less error, cleaner, readable, optional
- Nhược điểm của Typescript: requires compilation, long code
- Tìm hiểu Types trong Typescript: Primitives(string, number, boolean), Structural Types(object, array, function)
  -> Thực hành bài tập tính tổng(DOM input) sử dụng `typeof`
  -> Thực hành bài tập tính tổng(DOM input) sử dụng `typescript`
- Type Assignment Type inference
- Tìm hiểu Object Type
  -> Thực hành
- Tìm hiểu Array Type
  -> Thực hành
- Tìm hiểu Tuple Type
- Tìm hiểu Enum Type
- Tìm hiểu Any Type
- Tìm hiểu Union Type
- Tìm hiểu Literal Type
- Tìm hiểu Function Type
- Tìm hiểu Void Type
- Tìm hiểu Unknow Type
- Tìm hiểu Never Type
- Tìm hiểu Custom Type
- Interface
- Generic
- Mapped Types
- Lookup Types
- Conditional Types: Extends
- Utility Types: Pick, Omit, Partial, Record
- As
- Sử dụng Typescript với React component -->

# Chương 17: React Performance

- Props drilling toàn tập
- Nắm vững react composition và container pattern nâng cao
- Tất tần tật về re-render trong React
- Tại sao bạn nên sử dụng key là index
- useMemo, useCallback và memo
- Bạn thực sự không cần useMemo và useCallback
- Cách viết code react để có hiệu suất tốt nhất
- Tối ưu React Context bạn đã biết chưa
- Tất tần tật về useEffect
- Xử lý dữ liệu lớn với react-virtual
