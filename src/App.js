import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogPageDetails from "./components/BlogPageDetails";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
// Link Active Link Outlet Nested routes useParams useSearchParams NotFound useNavigate
const App = () => {
  // đây là một bài viết -> day-la-mot-bai-viet
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
