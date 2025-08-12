import { Route, Routes } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage";
import DashboardPage from "../../pages/DashboardPage";
import NotFoundPage from "../../pages/NotFoundPage";
import UserDetailsPage from "../../pages/UserDetailsPage";
import UserPosts from "../UserPosts/UserPosts";
import UserTodos from "../UserTodos/UserTodos";

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
          <Route path="posts" element={<UserPosts />} />
          <Route path="todos" element={<UserTodos />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
