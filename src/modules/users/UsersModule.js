import { Routes, Route } from "react-router-dom";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import AlbumsListPage from "./pages/AlbumsListPage";
import UserListPage from "./pages/UserListPage";

export default function UsersModule() {
  return (
    <Routes>
      <Route path="" element={<UserListPage />} />
      <Route path=":id" element={<AlbumsListPage />} />
      <Route path=":id/:albumId" element={<AlbumDetailPage />} />
      <Route path="*" element={<h1>User not found</h1>} />
    </Routes>
  );
}
