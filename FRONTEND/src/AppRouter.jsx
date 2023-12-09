import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PrivateRoutes from "./components/PrivateRoutes";
import NotFoundPage from "./pages/404Page";
import PostsPage from "./pages/PostsPage";
import CommentPage from "./pages/CommentsPage";
import NewPost from "./pages/NewPost";
import OnePostPage from "./pages/OnePostPage.jsx";
import MyPostsPage from "./pages/MyPostsPage";

function AppRouter() {
  return (
    <Routes>
      {/* Rutas Protegidas */}
      <Route element={<PrivateRoutes />}>
        <Route path="/posts/myposts" element={<MyPostsPage />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:postId" element={<OnePostPage />} />
        <Route path="/comments/:postId" element={<CommentPage />} />
      </Route>

      {/* Rutas Públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}
export default AppRouter;