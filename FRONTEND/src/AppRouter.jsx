import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoutes from "./components/PrivateRoutes";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404Page";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import UsersPage from "./pages/UsersPage";

function AppRouter() {
    return (
        <Routes>
            {/* Rutas Privadas */}
            <Route element={<PrivateRoutes />}>
             <Route path="/posts" element={<PostsPage />} />
             <Route path="/comments" element={<CommentsPage />} />
             <Route path="/users" element={<UsersPage />} />

            </Route>
            {/* Rutas Públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter;